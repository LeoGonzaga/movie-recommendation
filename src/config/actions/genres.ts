import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "genres",
  initialState: {
    selectedItems: [] as any,
  },
  reducers: {
    add(state, data) {
      state.selectedItems.push(data.payload);
      console.log(data.payload);
    },
  },
});

export const { add } = slice.actions;
export default slice.reducer;
