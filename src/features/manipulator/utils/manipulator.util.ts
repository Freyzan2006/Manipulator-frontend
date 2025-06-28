import { expandOptimizedCommand } from "@/features/command";

/**
 * Поиск индекса команды в стеке команд, для отслеживания текущей выполняемой команды
 * @param executingList Стек команд
 * @param currentIndex Текущий индекс
 * @returns Индекс команды
 */
export const getCurrentCommandIndex = (executingList: string[], currentIndex: number): number => {
  let count = 0;

  for (let i = 0; i < executingList.length; i++) {
    const expanded = expandOptimizedCommand(executingList[i]);
    count += expanded.length;

    if (currentIndex < count) return i;
  }

  return -1;
};
