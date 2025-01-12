import {all} from 'redux-saga/effects'
import { watchRegisterSaga } from './registerSaga'


export function* rootSaga() {
    yield all([watchRegisterSaga()])
}