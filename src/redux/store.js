import { configureStore } from '@reduxjs/toolkit'

// slices
import userSlice from './slices/userSlice';
import courseSlice from './slices/courseSlice';
import filterSlice from './slices/filterSlice';
import selectSlice from './slices/selectSlice';
import modalSlice from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    courseSlice: courseSlice,
    filterSlice: filterSlice,
    selectSlice: selectSlice,
    modalSlice: modalSlice,
  },
})