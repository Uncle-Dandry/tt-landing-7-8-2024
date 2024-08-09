import { combineReducers } from '@reduxjs/toolkit';

import contactReducer from './app/contactSlice';

export { sendContactData } from './app/contactSlice';

const rootReducer = combineReducers({
  contact: contactReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
