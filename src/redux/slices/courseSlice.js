import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoaded: false,
  courseList: [],
}
export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.isLoaded = true;
      state.courseList = action.payload.courseList;
    },
  },
})

export const { setCourses } = courseSlice.actions

export default courseSlice.reducer