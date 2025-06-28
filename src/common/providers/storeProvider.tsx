import { Provider } from "react-redux";
import store from "../store";

interface IStoreProviderProps {
  children: React.ReactNode;
}

/**
 * Провайдер хранилища
 * @component
 * @name StoreProvider
 * @returns {JSX.Element}
 */
export const StoreProvider: React.FC<IStoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
