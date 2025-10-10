import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

// (optional) export types if using TS; with JS this is enough
