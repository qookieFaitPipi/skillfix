import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entryModalState: false,
  registerModalState: false,
  alertModalState: false,
}
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setEntryModalState: (state, action) => {
      state.entryModalState = action.payload.entryModalState;
    },
    setRegisterModalState: (state, action) => {
      state.registerModalState = action.payload.registerModalState;
    },
    setAlertModalState: (state, action) => {
      state.alertModalState = action.payload.alertModalState;
    }
  },
})

export const { setEntryModalState, setRegisterModalState, setAlertModalState } = modalSlice.actions

export default modalSlice.reducer