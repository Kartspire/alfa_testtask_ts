import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loaderSlice",
  initialState: {
    loader: true,
  },
  reducers: {
    removeLoader(state) {
      state.loader = !state.loader;
    },
  },
});

export default loaderSlice.reducer;
export const { removeLoader } = loaderSlice.actions;
