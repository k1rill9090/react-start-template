import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';


export type TypeTokenState = {
  status: string;
  token: string | null;
  payload: {
    email: string;
    password: string;
  };
  error: string | null;
}

type Action = Pick<TypeTokenState, 'payload'>

const initialState: TypeTokenState = {
  status: '',
  token: localStorage.getItem('token'),
  payload: {email: "", password: ""},
  error: null,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    // для инициации работы саги, которая получит токен и вызовет getToken
    initialActionGetToken: (state, action: Action) => {
        state.payload = {
          email: action.payload.email,
          password: action.payload.password
        }
    },
    getToken: (state, action) => {
      switch (action.payload.status) {
        case 'success':
          localStorage.setItem('token', action.payload.token);
          state.status = action.payload.status;
          state.token = localStorage.getItem('token');
          break;
        case 'error':
          localStorage.removeItem('token');
          state.status = action.payload.status;
          state.token = null;
          state.error = action.payload.error;
          break;
      }
    },
    removeToken: (state) => {
        localStorage.removeItem('token');
          state.status = '';
          state.token = localStorage.getItem('token');
          state.error = null
    },
    clearStatus: (state) => {
      state.status = '';
    }
  },
});
export const {getToken, removeToken, initialActionGetToken, clearStatus} = tokenSlice.actions;

export const tokenSelectors = {
  get: (state: RootState): RootState['token'] => {
    return state.token;
  },
};

export const selectToken = (state: RootState) => state.token;
export default tokenSlice.reducer;
