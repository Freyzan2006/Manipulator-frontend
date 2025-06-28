/**
 * Модуль для работы с manipulator
 * features/manipulator/index.ts файл для экспорта компонентов и слайсов
 * @module
 * @name features/manipulator
 * @exports {manipulatorReducer} // слайс
 * @exports {Manipulator} // компонент манипулятор, содержащий в себе весь интерфейс
 * @exports {addCommandToExecutingList} // функция для добавления команды в список выполняемых
 */

export { Manipulator } from "./components/widgets/Manipulator";

export { addCommandToExecutingList } from "./slices/manipulatorSlice";

import manipulatorReducer from "./slices/manipulatorSlice";
export { manipulatorReducer };
