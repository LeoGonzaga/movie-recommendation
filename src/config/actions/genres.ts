import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "genres",
  initialState: {
    selectedItems: 0,
  },
  reducers: {
    add(state) {
      state.selectedItems++;
    },
    remove(state) {
      state.selectedItems--;
    },
  },
});

export const { add, remove } = slice.actions;
export default slice.reducer;
