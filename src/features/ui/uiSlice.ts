import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UIState = {
  theme: "light" | "dark";
  navOpen: boolean;
};

const initialState: UIState = {
  theme: "light",
  navOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setNavOpen(state, action: PayloadAction<boolean>) {
      state.navOpen = action.payload;
    },
  },
});

export const { toggleTheme, setNavOpen } = uiSlice.actions;
export default uiSlice.reducer;
