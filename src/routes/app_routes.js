import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { useSelector } from "react-redux";
import ProtectedRoute from "./protected_route";
import AppThemeProvider from "../mui_theme_provider";
import Login from "../pages/login";
import SuspendedComponent from "../components/suspended_component";
import LoadingFallback from "../components/loading_fallback";
import { darkPalette, lightPalette } from "../mui_theme_provider";

const Register = lazy(() => import("../pages/register"));
const Layout = lazy(() => import("../layout"));
const Home = lazy(() => import("../pages/home"));
const NotFound = lazy(() => import("../pages/not_found"));

const AppRouter = () => {
  const { mode } = useSelector((state) => state.appReducer);

  const currentPalette = mode === "dark" ? darkPalette : lightPalette;

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppThemeProvider palette={currentPalette}>
                <Layout />
              </AppThemeProvider>
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <SuspendedComponent
                fallback={<LoadingFallback />}
                component={<Home />}
              />
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <SuspendedComponent
              fallback={<LoadingFallback />}
              component={<Register />}
            />
          }
        />
        <Route
          path="*"
          element={
            <SuspendedComponent
              fallback={<LoadingFallback />}
              component={<NotFound />}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
