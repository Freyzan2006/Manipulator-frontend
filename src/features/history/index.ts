/**
 * Модуль для работы с историей команд
 * features/history/index.ts файл для экспорта компонентов и слайсов
 * @module
 * @name features/history
 * @exports {HistoryReducer} // слайс
 * @exports {History} // компонент для отображения истории
 * @exports {createHistoryEntry} // функция для создания записи в истории
 */

import HistoryReducer from "./slices/historySlice";
export { HistoryReducer };

export { History } from "./components/widgets/History";

export { createHistoryEntry } from "./thunks/createHistoryEntryThunk";
