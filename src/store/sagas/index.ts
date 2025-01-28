import {all} from 'redux-saga/effects'
import { watchRegisterSaga } from './registerSaga'
import { watcherAuthSaga } from './authSaga'
import { watcherProfileSaga } from './profileSaga'
import { watchFetchProductsSaga } from './getProductsSaga'


export function* rootSaga() {
    yield all([watchRegisterSaga(), watcherAuthSaga(), watcherProfileSaga(), watchFetchProductsSaga()])
}