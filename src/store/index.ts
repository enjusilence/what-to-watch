import { configureStore } from '@reduxjs/toolkit';
import updateStore from './reducer';

const store = configureStore({
  reducer: updateStore,
});

export default store;
