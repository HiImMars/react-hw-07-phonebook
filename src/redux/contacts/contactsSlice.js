import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactsInitialState';
import { addContact, deleteContact, getContacts } from './operations';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunks = [addContact, deleteContact, getContacts];

const thunkType = type => arrThunks.map(element => element[type]);

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
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
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledCreate)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...thunkType(STATUS.PENDING)), handlePending)
      .addMatcher(isAnyOf(...thunkType(STATUS.REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...thunkType(STATUS.FULFILLED)), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;
