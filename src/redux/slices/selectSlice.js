import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSelected: false,
  thisVideo: null,
  thisCourseConfig: {
    id: null,
    name: null,
    previewphoto: null,
    previewvideo: null,
    expertphoto: null,
    author: null,
    authorInfo: null,
    lessons: [],
  },
}
export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    selectCourse: (state, action) => {
      state.isSelected = true;
      state.thisVideo = action.payload.thisCourseConfig.previewvideo;
      state.thisCourseConfig = action.payload.thisCourseConfig;
    },
    selectVideo: (state, action) => {
     state.thisVideo = action.payload.thisVideo;
    }
  },
})

export const { selectCourse, selectVideo } = selectSlice.actions

export default selectSlice.reducer