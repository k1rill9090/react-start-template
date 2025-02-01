import {all} from 'redux-saga/effects'
import { watchRegisterSaga } from './registerSaga'
import { watcherAuthSaga } from './authSaga'
import { watcherProfileSaga } from './profileSaga'
import { watchFetchProductsSaga } from './getProductsSaga'
import { watchAddProductSaga } from './addProductSaga'


export function* rootSaga() {
    yield all([
        watchRegisterSaga(), 
        watcherAuthSaga(), 
        watcherProfileSaga(), 
        watchFetchProductsSaga(),
        watchAddProductSaga()

    ])
}