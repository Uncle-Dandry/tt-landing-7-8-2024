import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import { Contact } from 'types';

const initialState: Contact = {
  name: '',
  phone: '',
};

export const sendContactData = createAsyncThunk(
  'contact/sendContactData',
  async (contact: Contact, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });

      if (!response.ok) {
        throw new Error('Failed to send contact data');
      }

      const data = await response.json();
      return data;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendContactData.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.phone = action.payload.phone;
      })
      .addCase(sendContactData.rejected, (state, action) => {
        console.error(action.payload);
      });
  },
});

export default contactSlice.reducer;
