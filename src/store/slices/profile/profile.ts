import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { UserType } from "src/homeworks/jsxCss/MyAuthForm/validateUser";
import { RootState } from "../../store";
// import { Iform } from "src/homeworks/jsxCss/MyAuthForm/MyAuthForm";


// import fixUsers from "src/store/users.json";

export type Profile = {
    status: string ;
    id: string | null;
    email: string | null;
    name?: string | null;
    role?: string | null;
}

// если нет id в localStorage, то создаем нового пользователя
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
        },
        removeProfile: () => {
            return initialState
        }
    }
    
});

export const selectProfile = (state: RootState) => state.profile;
export const { setProfile, removeProfile, initialGetProfileSaga } = profileSlice.actions;
export default profileSlice.reducer;