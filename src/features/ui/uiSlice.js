import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",     // "light" | "dark"
  navOpen: false,     // mobile nav state
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setNavOpen(state, action) {
      state.navOpen = action.payload;
    },
  },
});

export const { toggleTheme, setNavOpen } = uiSlice.actions;
export default uiSlice.reducer;
