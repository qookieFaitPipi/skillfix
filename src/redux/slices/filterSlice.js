import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  courseType: 0,
}
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCourseType: (state, action) => {
      state.courseType = action.payload.courseType;
    },
  },
})

export const { setCourseType } = filterSlice.actions

export default filterSlice.reducer