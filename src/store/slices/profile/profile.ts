import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "src/homeworks/jsxCss/MyAuthForm/validateUser";
import { RootState } from "../../store";
import { Iform } from "src/homeworks/jsxCss/MyAuthForm/MyAuthForm";
import fixUsers from "src/store/users.json";

type UserState = Omit<UserType, "password"> | null;

// если нет id в localStorage, то создаем нового пользователя
const initialState: UserState = localStorage.getItem("userId") ? {
    id: +localStorage.getItem("userId"),
    email: fixUsers.users.find(user => user.id === Number(localStorage.getItem("userId"))).email,
    role: fixUsers.users.find(user => user.id === Number(localStorage.getItem("userId"))).role,
    name: fixUsers.users.find(user => user.id === Number(localStorage.getItem("userId"))).name,
    bio: fixUsers.users.find(user => user.id === Number(localStorage.getItem("userId"))).bio,
}: null

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (_state, action: PayloadAction<Iform>) => {
            const {id, email, role, name, bio} = fixUsers.users.find(user => user.email === action.payload.email);
            // добавить id пользователя в localStorage для 
            // подтягивания данных по пользователю при перезагрузке страницы 
            // (на данный момент токен к пользователю жестко не привязан)
            localStorage.setItem("userId", id.toString());
            return {
                id,
                email,
                role,
                name,
                bio
            }
        },
        removeProfile: () => {
            localStorage.removeItem("userId");
            return null;
        }
    }
});

export const selectProfile = (state: RootState) => state.profile;
export const { setProfile, removeProfile } = profileSlice.actions;
export default profileSlice.reducer;