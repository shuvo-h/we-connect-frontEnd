import { configureStore } from '@reduxjs/toolkit';
import serviceSlice from '../slices/serviceSlice';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    service: serviceSlice,
  },
});
