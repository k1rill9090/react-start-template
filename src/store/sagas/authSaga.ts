import axios from "axios"
import { call, put, select, takeLatest } from "redux-saga/effects";
import { getToken, initialActionGetToken, TypeTokenState } from "../slices/token/token";
import { URL } from "src/constants";

type authPayload = {
    email: string,
    password: string
};
type TypeAuthSaga = Omit<TypeTokenState, 'payload'>

function* authSaga() {
    const payload = (yield select(state => state.token.payload)) as authPayload;
    const response = (yield call(() => axios.post(
            `${URL}/signin`,
            payload,
        ).then(
            (ans) => {
                return(
                    {
                        status: 'success',
                        token: ans.data.token,
                        error: '',
                    }
                )
            }
        ).catch(
            (err) => {
                return(
                    {
                        status: 'error',
                        token: '',
                        error: err.message === 'Network Error' ? err.message : err.response.data.errors[0].message,
                    }
                )
            }
        )
    )) as TypeTokenState;
    yield put(getToken(response))
}

export function* watcherAuthSaga() {
    yield takeLatest(initialActionGetToken, authSaga)
}