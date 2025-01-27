import { call, CallEffect, put, takeLatest } from "redux-saga/effects";
import { initialGetProfileSaga, Profile, setProfile } from "../slices/profile/profile";
import axios, { AxiosResponse } from "axios";
import { URL } from "src/constants";


function* profileSaga(): Generator {
const token = localStorage.getItem("token");
    if (token) {
        const response = (yield call(() => axios.get(
                `${URL}/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
            ).then(
                (ans) => {
                    return(
                        {
                            status: "success",
                            email: ans.data.email,
                            id: ans.data.id,
                        }
                    )
                }
            ).catch(
                (err) => {
                    return(
                        {
                            status: "error",
                            email: null,
                            id: null,
                        }
                    )
                    
                }
            )
        )) as Profile;
        yield put(setProfile(response));
    };

}

export function* watcherProfileSaga() {
    yield takeLatest(initialGetProfileSaga, profileSaga);
}