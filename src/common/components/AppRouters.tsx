import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import type { RootState } from "../store";
import { routes, type IRoute } from "../config/routes";
import { Suspense } from "react";
import { Loading } from "./Loading";

/**
 * Переход между страницами
 * @component
 * @name PageWrapper
 * @returns {JSX.Element}
 */
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    style={{ height: "100%" }}
  >
    {children}
  </motion.div>
);

/**
 * Анимированный переход между страницами
 * @component
 * @name AnimatedRoutes
 */
const AnimatedRoutes = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const renderRoutes = (routeList: IRoute[]) =>
    routeList.map(({ path, element, children, isProtected }) => (
      <Route
        key={path}
        path={path}
        element={
          isProtected ? (
            isAuthenticated ? (
              <PageWrapper>{element}</PageWrapper>
            ) : (
              <Navigate to="/auth" replace />
            )
          ) : isAuthenticated && path === "/auth" ? (
            <Navigate to="/" replace />
          ) : (
            <PageWrapper>{element}</PageWrapper>
          )
        }
      >
        {children && renderRoutes(children)}
      </Route>
    ));

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {renderRoutes(routes)}
      </Routes>
    </AnimatePresence>
  );
};

export const AppRouters: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <AnimatedRoutes />
    </Suspense>
  </BrowserRouter>
);
