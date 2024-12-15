import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';


const initialState: string | null = localStorage.getItem('token');

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    generateToken: () => {
        localStorage.setItem('token', Math.random().toString(16))
        return localStorage.getItem('token');
    },
    removeToken: () => {
        localStorage.removeItem('token')
        return localStorage.getItem('token');
    }
  },
});
export const {generateToken, removeToken} = tokenSlice.actions;

export const tokenSelectors = {
  get: (state: RootState): RootState['token'] => {
    return state.token;
  },
};

export const selectToken = (state: RootState) => state.token;
export default tokenSlice.reducer;
