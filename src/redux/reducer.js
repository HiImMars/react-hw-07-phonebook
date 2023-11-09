import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
});
