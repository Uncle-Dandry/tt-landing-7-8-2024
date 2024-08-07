import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Contact } from 'types';

const initialState: Contact = {
  name: '',
  phone: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    saveContact: (state, action: PayloadAction<Contact>) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
  },
});

export const { saveContact } = contactSlice.actions;

export default contactSlice.reducer;
