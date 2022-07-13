import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'features/UserFeature/userSlice';

const rootReducer = {
  base: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
