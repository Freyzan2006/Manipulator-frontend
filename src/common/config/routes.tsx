
import { AuthPage } from "@/pages/AuthPage";
import { HomePage } from "@/pages/HomePage";
import { ProfilePage } from "@/pages/ProfilePage";
import { Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { HistoryPage } from "@/pages/HistoryPage";


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

