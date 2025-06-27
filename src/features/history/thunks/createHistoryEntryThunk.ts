import type { RootState } from "@/common/store";
import { addHistoryEntry } from "../slices/historySlice";

// export const createHistoryEntry = (
//   beforePosition: [number, number],
//   beforeSamples: string[][],
//   startedAt: string
// ) => {
//   return (dispatch: any, getState: () => RootState) => {
//     const { command, manipulator } = getState();

//     dispatch(
//       addHistoryEntry({
//         id: crypto.randomUUID(),
//         raw: command.rawCommand,
//         optimized: command.optimizedCommand,
//         startedAt,
//         finishedAt: new Date().toISOString(),
//         beforePosition,
//         afterPosition: manipulator.position,
//         beforeSamples,
//         afterSamples: JSON.parse(JSON.stringify(manipulator.samples)), // или аналогичное состояние
//       })
//     );
//   };
// };

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
  return (dispatch: any) => {
    dispatch(
      addHistoryEntry({
        id: entry.id || crypto.randomUUID(),
        ...entry,
      })
    );
  };
};

