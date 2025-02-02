import { call, put, select, takeLatest } from "redux-saga/effects";
import { addResponceOrder, createOrder, TypeOrderPayload } from "../slices/order/orderSlice";
import axios from "axios";
import { URL } from "src/constants";

function* createOrderSaga(): Generator {
    const token = localStorage.getItem('token');
    const payload = (yield select(state => state.order.payload)) as TypeOrderPayload;
    try {
        const responce = yield call(
            axios.post, 
            `${URL}/orders`,
            payload,
            { headers: { Authorization: `Bearer ${token}` } }
        );
        yield put(addResponceOrder({status: "success", error: ""}))
    } catch (err) {
        yield put(addResponceOrder({status: "error", error: err.message}))       
    }
}

export function* watchCreateOrderSaga() {
    yield takeLatest(createOrder, createOrderSaga);
}