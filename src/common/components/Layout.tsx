import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import { NavBar } from "./NavBar";
import { lazy } from "react";

import { Suspense } from "react";
import { Loading } from "./Loading";

const AppSnackbar = lazy(() => import("@/features/alert/components/AppSnackbar"));

/**
 * Для схематического оформления
 * @component
 * @name Layout
 * @returns {JSX.Element}
 */
export const Layout = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ padding: 2 }}>
        <Outlet />
      </Box>

      <Suspense fallback={<Loading />}>
        <AppSnackbar />
      </Suspense>
    </>
  );
};

export default Layout;
