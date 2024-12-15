import { createSlice } from "@reduxjs/toolkit";

const initialFlagSlice = createSlice({
    name: "initialFlag",
    initialState: true,
    reducers: {}
})

export default initialFlagSlice.reducer;