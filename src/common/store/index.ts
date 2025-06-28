import { configureStore } from "@reduxjs/toolkit";

import { AlertReducer } from "@/features/alert";
import { authReducer } from "@/features/auth";
import { commandReducer } from "@/features/command";
import { HistoryReducer } from "@/features/history";
import { manipulatorReducer } from "@/features/manipulator";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    command: commandReducer,
    manipulator: manipulatorReducer,
    history: HistoryReducer,
    alert: AlertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
