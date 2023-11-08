import { createSlice } from '@reduxjs/toolkit';
import { phonebookInitialState } from './phonebookInitialState';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const phonebookFormReducer = phonebookSlice.reducer;
export const { setContacts, setFilter } = phonebookSlice.actions;
