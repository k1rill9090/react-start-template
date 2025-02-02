import { call, put, select, takeLatest } from "redux-saga/effects";
import { COMMAND_ID, URL } from "src/constants";
import axios, { Axios, AxiosResponse } from "axios";
import { initialReg, initialStateReg, name, regUser } from "../slices/registration/registration";


type dataType = typeof initialStateReg.payload

 function* workRegisterSaga(): Generator {
    const data = (yield select(state => state.registration.payload)) as dataType;
    const response = yield call(
        () => axios.post(
                `${URL}/signup`,
                {
                    email: data.email,
                    password: data.password,
                    commandId: COMMAND_ID
                }
            ).then(
                (ans) => {return({status: ans.status, errors: {message: ""}, data: ans.data})}
            ).catch(
                (err) => {
                    // если 400 ошибка, то записывать текст ошибки, иначе записывать network error
                    return(
                        {
                            status: err.message === 'Network Error' ? 500 : err.response.status,
                            errors: {
                                message: err.message === 'Network Error' ? err.message: err.response.data.errors[0].message},
                                data: {}
                            }
                    )
                }
            )
    );
    // console.log(response);
    yield put(initialReg({data: response}));
}

export function* watchRegisterSaga() {
    yield takeLatest(regUser, workRegisterSaga)
}