import { lazy, Suspense } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import SplashScreen from "../components/SplashScreen";
// ----------------------------------------------------------------------

export const HomePage = lazy(() => import("../pages/Home"));

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
    // { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
