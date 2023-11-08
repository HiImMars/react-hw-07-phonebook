import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
