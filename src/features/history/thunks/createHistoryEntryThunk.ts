
import type { Dispatch } from "@reduxjs/toolkit";
import { addHistoryEntry } from "../slices/historySlice";


type HistoryEntryPayload = {
  id?: string;
  raw: string;
  optimized: string;
  startedAt: string;
  finishedAt: string;
  beforePosition: [number, number];
  afterPosition: [number, number];
  beforeSamples: string[][];
  afterSamples: string[][];
};

export const createHistoryEntry = (entry: HistoryEntryPayload) => {
  return (dispatch: Dispatch) => {
    dispatch(
      addHistoryEntry({
        id: entry.id || crypto.randomUUID(),
        ...entry,
      })
    );
  };
};

