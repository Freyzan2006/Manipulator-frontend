import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
 
type ManipulatorState = {
  position: [number, number];
  gridSize: number;
  speed: number;
  executing: boolean;
  executingList: string[];
  currentExecutingIndex: number;
  samples: string[][];
  heldSample: string | null;
};

const initialState: ManipulatorState = {
  position: [0, 0],
  gridSize: 5,
  speed: 500,
  executing: false,
  executingList: [],
  currentExecutingIndex: 0,
  samples: (() => {
    const grid = Array(5).fill(null).map(() => Array(5).fill(""));
    grid[0][0] = "+";
    grid[1][2] = "+";
    grid[3][4] = "+";
    return grid;
  })(),
  heldSample: null,
};

const manipulatorSlice = createSlice({
  name: "manipulator",
  initialState,
  reducers: {

    move(state, action: PayloadAction<string>) {
      const [x, y] = state.position;
      const cmd = action.payload.toUpperCase();

      switch (cmd) {
        case "Л":
          state.position = [x, Math.max(0, y - 1)];
          break;
        case "П":
          state.position = [x, Math.min(state.gridSize - 1, y + 1)];
          break;
        case "В":
          state.position = [Math.max(0, x - 1), y];
          break;
        case "Н":
          state.position = [Math.min(state.gridSize - 1, x + 1), y];
          break;
        case "О":
          // Взять образец
          manipulatorSlice.caseReducers.takeSample(state);
          break;
        case "Б":
          // Положить образец
          manipulatorSlice.caseReducers.dropSample(state);
          break;
        default:
          break;
      }
    },
    resetPosition(state) {
      state.position = [0, 0];
    },

    setSpeed(state, action: PayloadAction<number>) {
      state.speed = action.payload;
    },
    setExecuting(state, action: PayloadAction<boolean>) {
      state.executing = action.payload;
    },

    addCommandToExecutingList(state, action: PayloadAction<string>) {
      state.executingList.push(action.payload);
    },
    clearExecutingList(state) {
      state.executingList = [];
    },

    setCurrentExecutingIndex(state, action: PayloadAction<number>) {
      state.currentExecutingIndex = action.payload;
    },



    takeSample(state) {
      const [x, y] = state.position;
      if (state.samples[x][y] && !state.heldSample) {
        state.heldSample = state.samples[x][y];
        state.samples[x][y] = "";
      }
    },

    dropSample(state) {
      const [x, y] = state.position;
      if (!state.samples[x][y] && state.heldSample) {
        state.samples[x][y] = state.heldSample;
        state.heldSample = null;
      }
    },




  },
});

export const { move, resetPosition, 
  setExecuting, setSpeed, addCommandToExecutingList, 
  setCurrentExecutingIndex, clearExecutingList,
  takeSample, dropSample
} = manipulatorSlice.actions;
export default manipulatorSlice.reducer;
