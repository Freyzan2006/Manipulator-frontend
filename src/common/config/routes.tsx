import { Navigate } from "react-router-dom";

import { lazy } from "react";

const AuthPage = lazy(() => import("@/pages/AuthPage"));
const HomePage = lazy(() => import("@/pages/HomePage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));
const HistoryPage = lazy(() => import("@/pages/HistoryPage"));
const Layout = lazy(() => import("../components/Layout"));

export interface IRoute {
  path: string;
  element: React.ReactNode;
  isProtected: boolean;
  children?: IRoute[];
}

export const routes: IRoute[] = [
  {
    path: "/auth",
    element: <AuthPage />,
    isProtected: false,
  },
  {
    path: "/",
    element: <Layout />,
    isProtected: true,
    children: [
      { path: "", element: <HomePage />, isProtected: true },
      { path: "profile", element: <ProfilePage />, isProtected: true },
      { path: "history", element: <HistoryPage />, isProtected: true },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
    isProtected: false,
  },
];
