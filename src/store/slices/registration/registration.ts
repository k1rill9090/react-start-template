import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/store/store";


export const initialStateReg = {
    status: '',
    payload: {email: "", password: ""},
    data: {status: 0, errors: {message: ""}, data: {}}
}

const regSlice = createSlice({
    name: "registration",
    initialState: initialStateReg,
    reducers: {
        initialReg: (state, payload) => {
            state.data = payload.payload.data;
            state.status = "complete";
        },
        regUser: (state, payload) => {
            state.status = "calling"
            state.payload = payload.payload;
        },
        clearRegState: () => initialStateReg
    }
})

export const getRegInfo = (state: RootState) => state.registration
export const { regUser, initialReg, clearRegState} = regSlice.actions
export default regSlice.reducer
export const {name} = regSlice