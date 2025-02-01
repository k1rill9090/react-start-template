import axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { Product } from "src/homeworks/ts1/3_write";
import { addErrorGetProduct, getProduct, changePage, initialGetProductsSaga, TypeProduct, getTotalPages } from "../slices/products/productsSlice";
import { URL } from "src/constants";


function* fetchProductsSaga(): Generator {
    const token = localStorage.getItem("token");
    const page = (yield select(state => state.product.getProducts.page)) as number;
    const pageSize = 5
    let totalPages = 0;
    let error = null;
    const response = (yield call(() => axios.get(
        `${URL}/products?${new URLSearchParams({
            pagination: JSON.stringify({
              pageSize: pageSize,
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
            totalPages = Math.ceil(ans.data.pagination.total / pageSize);
            // const [product] = ans.data.data;
            if(ans.data.data.length > 0) {
                return(
                    ans.data.data
                )
            } else return null

        }
    ).catch(
        (err) => {
            console.log(err)
            error = err.message
        }
    )
    )) as Product[];
    if (!error) {
        yield put(getProduct(response));
        yield put(getTotalPages(totalPages));
        if (page <= totalPages) yield put(changePage(page+1))
    } else {
        yield put(addErrorGetProduct(error))
    }
}

export function* watchFetchProductsSaga() {
    yield takeLatest(initialGetProductsSaga, fetchProductsSaga);
}