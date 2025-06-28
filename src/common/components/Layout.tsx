import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import { NavBar } from "./NavBar";
import { AppSnackbar } from "@/features/alert";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ padding: 2 }}>
        <Outlet />
      </Box>

      <AppSnackbar />
    </>
  );
};

export default Layout;
