import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saved: [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    saveItem(state, action) {
      state.saved.push(action.payload);
    },
    deleteSaved(state, action) {
      state.saved = state.saved.filter((it) => it.itemId !== action.payload);
    },

    clearSaved(state) {
      state.saved = [];
    },
  },
});

export const { saveItem, deleteSaved, clearSaved } = savedSlice.actions;

export default savedSlice.reducer;

export const getSaved = (state) => state.saved?.saved;
