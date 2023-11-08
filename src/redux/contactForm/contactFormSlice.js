import { createSlice } from '@reduxjs/toolkit';
import { contactFormInitialState } from './contactFormInitialState';

export const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState: contactFormInitialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const contactFormReducer = contactFormSlice.reducer;
export const { setName, setNumber } = contactFormSlice.actions;
