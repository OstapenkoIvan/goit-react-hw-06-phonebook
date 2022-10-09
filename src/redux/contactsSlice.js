import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

/**
 * TODO try immutable change state
 */

const contactsInitialState = [
  { name: 'Ivan', number: '0930339155', id: '1' },
  { name: 'Ostapenko', number: '0681853010', id: '2' },
];
// const contactsInitialState = {
//   contacts: [{ name: 'IS', number: '0930339155', id: 1 }],
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);

        // return [...state, action.payload];
      },
      prepare(name, number) {
        return { payload: { name, number, id: nanoid() } };
      },
    },
    deleteContact: {
      reducer(state, action) {
        // const index = state.findIndex(contact => contact.id === action.payload);
        // state.splice(index, 1);

        return state.filter(contact => contact.id !== action.payload);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
