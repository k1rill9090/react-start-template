import { call, put, select, takeLatest } from "redux-saga/effects";
import { addProduct, addProductStatus, AddProductStatusType, ProductPayload } from "../slices/products/productsSlice";
import axios from "axios";
import { URL } from "src/constants";
import { RootState } from "../store";


function* addProductSaga(): Generator {
const token = localStorage.getItem("token");
const payload = (yield select(state => state.product.addProduct.payload)) as ProductPayload;
const response = (yield call(
    () => axios.post(
        `${URL}/products`,
        {
            ...payload
        },
        {
            headers: {
                Authorization: token
            }
        },
    ).then(
        (res) => {return({status: "success", error: ""})}
    ).catch(
        (err) => {
            console.log(err)
            return(
                {
                    status: "error",
                    // error: err.message === 'Network Error' ? err.message : err.response.data.errors[0].message
                    error: err.message
                }
            )
        }
    )
)) as AddProductStatusType;
yield put(addProductStatus(response));
}

export function* watchAddProductSaga() {
    yield takeLatest(addProduct, addProductSaga);
}