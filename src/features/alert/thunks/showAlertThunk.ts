import type { AppDispatch, RootState } from "@/common/store";
import { showAlert } from "../slices/alertSlice";

/**
 * Thunk для показа уведомления
 * @function
 * @name showAlertThunk
 */
export const showAlertThunk = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { message } = getState().alert;
  dispatch(showAlert(message));
};
