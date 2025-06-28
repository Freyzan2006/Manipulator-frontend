import { createSlice } from "@reduxjs/toolkit";
import type { HistoryEntry } from "../entity/history.entity";
import type { PayloadAction } from "@reduxjs/toolkit";

type HistoryState = {
  entries: HistoryEntry[];
};

const initialState: HistoryState = {
  entries: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistoryEntry(state, action: PayloadAction<HistoryEntry>) {
      state.entries.unshift(action.payload);
    },
    clearHistory(state) {
      state.entries = [];
    },
  },
});

export const { addHistoryEntry, clearHistory } = historySlice.actions;
export default historySlice.reducer;
