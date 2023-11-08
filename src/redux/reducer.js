import { combineReducers } from '@reduxjs/toolkit';
import { contactFormReducer } from './contactForm/contactFormSlice';
import { phonebookFormReducer } from './phonebook/phonebookSlice';

export const reducer = combineReducers({
  contactForm: contactFormReducer,
  phonebook: phonebookFormReducer,
});
