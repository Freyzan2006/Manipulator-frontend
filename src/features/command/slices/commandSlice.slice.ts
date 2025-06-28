import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ICommand } from "../types/command.type";
import { optimizeCommands } from "../utils/optimizeCommands.util";

type CommandState = {
  rawCommand: string;
  allowedCommands: ICommand[];
  optimizedCommand: string;
};

const initialState: CommandState = {
  rawCommand: "",
  allowedCommands: [
    { name: "Л", description: "Шаг влево" },
    { name: "П", description: "Шаг вправо" },
    { name: "В", description: "Шаг вверх" },
    { name: "Н", description: "Шаг вниз" },
    { name: "О", description: "Взять образец" },
    { name: "Б", description: "Отпустить образец" },
  ],
  optimizedCommand: "",
};

const commandSlice = createSlice({
  name: "command",
  initialState,
  reducers: {
    setCommand(state, action: PayloadAction<string>) {
      state.rawCommand = action.payload;
      state.optimizedCommand = optimizeCommands(action.payload);
    },
    clearCommand(state) {
      state.rawCommand = "";
    },
  },
});

export const { setCommand, clearCommand } = commandSlice.actions;
export default commandSlice.reducer;
