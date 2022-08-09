import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalOpen: false,
  modalData: {},
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload.open;
      state.modalData = action.payload.data;
    },
  },
});

export const { setModalOpen } = tableSlice.actions;

export const selectModalOpen = ({ table }) => table.modalOpen;

export default tableSlice.reducer;
