import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import ProtectedRoute from "./protected_route";
import AppThemeProvider from "../mui_theme_provider";
import Login from "../pages/login";

const Register = lazy(() => import("../pages/register"));
const Layout = lazy(() => import("../layout"));
const Home = lazy(() => import("../pages/home"));
const NotFound = lazy(() => import("../pages/not_found"));

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppThemeProvider>
                <Layout />
              </AppThemeProvider>
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
