import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideAlert } from "../slices/alertSlice";
import type { RootState } from "@/common/store";

export const AppSnackbar = () => {
  const { message, open } = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={() => dispatch(hideAlert())}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert severity="success" onClose={() => dispatch(hideAlert())}>
        {message}
      </Alert>
    </Snackbar>
  );
};
