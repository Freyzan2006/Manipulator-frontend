import { expandOptimizedCommand } from "@/features/command";

export const getCurrentCommandIndex = (executingList: string[], currentIndex: number): number => {
  let count = 0;

  for (let i = 0; i < executingList.length; i++) {
    const expanded = expandOptimizedCommand(executingList[i]);
    count += expanded.length;

    if (currentIndex < count) return i;
  }

  return -1; // если всё закончилось
};
