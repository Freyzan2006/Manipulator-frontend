import type { AppDispatch, RootState } from "@/common/store";
import { showAlert } from "../slices/alertSlice";

export const showAlertThunk = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { message } = getState().alert;
  dispatch(showAlert(message));
};
