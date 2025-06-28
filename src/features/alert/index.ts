/**
 * features/alert/index.ts файл для экспорта компонентов и слайсов
 * @module
 * @name features/alert
 * @exports {AlertReducer}
 * @exports {AppSnackbar}
 */

import AlertReducer from "./slices/alertSlice";
export { AlertReducer };

import AppSnackbar from "./components/AppSnackbar";
export { AppSnackbar };

export { showAlertThunk } from "./thunks/showAlertThunk";
