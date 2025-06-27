import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { routes, type IRoute } from "../config/routes";


export const AppRouters: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const renderRoutes = (routeList: IRoute[]) =>
    routeList.map(({ path, element, children, isProtected }) => (
      <Route
        key={path}
        path={path}
        element={
          isProtected
            ? isAuthenticated
              ? element
              : <Navigate to="/auth" replace />
            : isAuthenticated && path === "/auth"
            ? <Navigate to="/" replace />
            : element
        }
      >
        {children && renderRoutes(children)}
      </Route>
    ));

  return (
    <BrowserRouter>
      <Routes>{renderRoutes(routes)}</Routes>
    </BrowserRouter>
  );
};
