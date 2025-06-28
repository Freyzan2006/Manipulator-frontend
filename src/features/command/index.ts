/**
 * Модуль для работы с командами
 * features/command/index.ts файл для экспорта компонентов и слайсов
 * @module
 * @name features/command
 * @exports {commandReducer} // слайс
 * @exports {Command} // компонент для ввода команд
 * @exports {expandOptimizedCommand} // функция для расшифровки оптимизированных команд
 * @exports {optimizeCommands} // функция для оптимизации команд
 */

import commandReducer from "./slices/commandSlice.slice";
export { commandReducer };

export { Command } from "./components/Command";
export { expandOptimizedCommand, optimizeCommands } from "./utils/optimizeCommands.util";
