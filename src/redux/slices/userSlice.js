import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userLogin: null,
  userPassword: null,
  isEntered: false
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userLogin = action.payload.userLogin;
      state.userPassword = action.payload.userPassword;
      state.isEntered = true;
      document.cookie = "user=" + action.payload.userLogin;
    },
    logout: (state, action) => {
      state.userLogin = null;
      state.userPassword = null;
      state.isEntered = false;
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer