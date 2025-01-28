import axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { Product } from "src/homeworks/ts1/3_write";
import { addError, addProduct, changePage, initialGetProductsSaga, TypeProduct } from "../slices/products/productsSlice";
import { URL } from "src/constants";

function* fetchProductsSaga(): Generator {
    const token = localStorage.getItem("token");
    const page = (yield select(state => state.product.page)) as number;
    let error = null;
    const response = (yield call(() => axios.get(
        `${URL}/products?${new URLSearchParams({
            pagination: JSON.stringify({
              pageSize: 1,
              pageNumber: page,
            }),
            sorting: JSON.stringify({ type: 'ASC', field: 'id' }),
          }).toString()}`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : null,
            },
            
          }
    ).then(
        (ans) => {
            const [product] = ans.data.data;
            return(
                {
                    id: product.id,
                    name: product.name,
                    photo: product.photo,
                    desc: product.desc,
                    createdAt: product.createdAt,
                    oldPrice: product.oldPrice,
                    price: product.price,
                    category: {
                        id: product.category.id,
                        name: product.category.name,
                    }
                }
            )

        }
    ).catch(
        (err) => {
            error = err.message
        }
    )
    )) as Product;
    if (!error) {
        yield put(addProduct(response));
        yield put(changePage(page + 1))
    } else {
        console.log(error)
        yield put(addError(error))
    }
}

export function* watchFetchProductsSaga() {
    yield takeLatest(initialGetProductsSaga, fetchProductsSaga);
}