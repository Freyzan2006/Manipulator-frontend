// features/alert/alertSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AlertState = {
  message: string;
  open: boolean;
};

const initialState: AlertState = {
  message: "Всё успешно!",
  open: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert(state, action: PayloadAction<string>) {
      state.message = action.payload;
      state.open = true;
    },
    hideAlert(state) {
      state.open = false;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
