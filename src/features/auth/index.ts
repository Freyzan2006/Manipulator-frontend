/**
 * Модуль для работы с авторизацией
 * features/auth/index.ts файл для экспорта компонентов и слайсов
 * @module
 * @name features/auth
 * @exports {authReducer} // слайс
 * @exports {LoginForm} // компонент для авторизации
 */

export { LoginForm } from "./components/LoginForm";

import authReducer from "./slices/authSlice.slice";
export { authReducer };

export { login, logout } from "./slices/authSlice.slice";
