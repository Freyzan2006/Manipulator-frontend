
import { AuthPage } from "@/pages/AuthPage";
import { HomePage } from "@/pages/HomePage";
import { ProfilePage } from "@/pages/ProfilePage";
import { Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { HistoryPage } from "@/pages/HistoryPage";


export interface IRoute {
  path: string;
  element: React.ReactNode;
  protected: boolean;
}

export const routes = [
  {
    path: "/auth",
    element: <AuthPage />,
    protected: false,
  },
  {
    path: "/",
    element: <Layout />, // ✅ Layout обёртка
    protected: true,
    children: [
      { path: "", element: <HomePage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "history", element: <HistoryPage />},
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
    protected: false,
  },
];
