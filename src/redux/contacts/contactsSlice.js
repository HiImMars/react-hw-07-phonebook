import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactsInitialState';
import {
  createContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './contactsThunk';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunks = [createContactThunk, deleteContactThunk, getContactsThunk];

const thunkType = type => arrThunks.map(element => element[type]);

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacs.error = null;
};

const handleFulfilledGet = (state, action) => {
  state.contacts.items = action.payload;
};

const handleFulfilledCreate = (state, action) => {
  state.contacts.items.push(action.payload);
};

const handleFulfilledDelete = (state, action) => {
  state.contacts.items = state.contacts.items.filter(
    contact => contact.id !== action.payload.id
  );
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...thunkType(STATUS.PENDING)), handlePending)
      .addMatcher(isAnyOf(...thunkType(STATUS.REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...thunkType(STATUS.FULFILLED)), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
