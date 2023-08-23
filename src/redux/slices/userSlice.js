import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userLogin: null,
  userPassword: null,
  isEntered: false
}
export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userLogin = action.payload.userLogin;
      state.userPassword = action.payload.userPassword;
      state.isEntered = true;
      document.cookie = "token=" + action.payload.userLogin;
    },
    logout: (state) => {
      state.userLogin = null;
      state.userPassword = null;
      state.isEntered = false;
      document.cookie = "token=-1";
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer