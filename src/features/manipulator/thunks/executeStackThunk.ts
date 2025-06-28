import type { AppDispatch, RootState } from "@/common/store";
import {
  clearExecutingList,
  move,
  setCurrentExecutingIndex,
  setExecuting,
} from "../slices/manipulatorSlice";
import { optimizeCommands } from "@/features/command";
import { createHistoryEntry } from "@/features/history";
import { showAlertThunk } from "@/features/alert";

/**
 * Thunk для выполнения стека команд которые были добавлены при нажатии на кнопку "Добавить на исполнение"
 * @function
 * @name executeStackThunk
 * @returns {Promise<void>}
 */
export const executeStackThunk = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { executingList, speed } = getState().manipulator;

  if (!executingList.length) return;

  dispatch(setExecuting(true));

  let globalIndex = 0;
  for (let cmdIndex = 0; cmdIndex < executingList.length; cmdIndex++) {
    const rawCommand = executingList[cmdIndex];
    const optimizedCommand = optimizeCommands(rawCommand);

    const beforeSamples = JSON.parse(JSON.stringify(getState().manipulator.samples));
    const beforePosition = [...getState().manipulator.position] as [number, number];
    const startedAt = new Date().toISOString();

    for (let i = 0; i < optimizedCommand.length; i++) {
      const char = rawCommand[i];
      dispatch(setCurrentExecutingIndex(globalIndex));
      dispatch(move(char));
      await new Promise(res => setTimeout(res, speed));
      globalIndex++;
    }

    const afterSamples = JSON.parse(JSON.stringify(getState().manipulator.samples));
    const afterPosition = [...getState().manipulator.position] as [number, number];
    const finishedAt = new Date().toISOString();

    dispatch(
      createHistoryEntry({
        raw: rawCommand,
        optimized: optimizedCommand,
        startedAt,
        finishedAt,
        beforeSamples,
        afterSamples,
        beforePosition,
        afterPosition,
      })
    );
  }
  globalIndex = 0;

  dispatch(showAlertThunk());
  dispatch(setExecuting(false));
  dispatch(clearExecutingList());
};
