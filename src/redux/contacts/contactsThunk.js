import { createAsyncThunk } from '@reduxjs/toolkit';
import { createContact, deleteContact, getContacts } from 'api/phonebookApi';

export const getContactsThunk = createAsyncThunk('contacts/get', () =>
  getContacts()
);

export const createContactThunk = createAsyncThunk('contacts/create', data =>
  createContact(data)
);

export const deleteContactThunk = createAsyncThunk('contacts/delete', id =>
  deleteContact(id)
);
