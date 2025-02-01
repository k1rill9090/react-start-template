import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";



export type Profile = {
    status: string ;
    id: string | null;
    email: string | null;
    name?: string | null;
    role?: string | null;
}

const initialState: Profile = {
    status: "",
    id: "",
    email: '',
    name: '',
    role: 'user',
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        initialGetProfileSaga: (state) => {
            state.status = "pending";
        },
        setProfile: (state, action: PayloadAction<Profile>) => {
            state.status = action.payload.status;
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.role = 'admin'
        },
        removeProfile: () => {
            return initialState
        }
    }
    
});

export const selectProfile = (state: RootState) => state.profile;
export const { setProfile, removeProfile, initialGetProfileSaga } = profileSlice.actions;
export default profileSlice.reducer;