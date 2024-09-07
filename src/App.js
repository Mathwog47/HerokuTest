import "bootstrap/scss/bootstrap.scss";
import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthWrapper } from "./LayoutWrapper/AuthWrapper";
import { DashboardWrapper } from "./LayoutWrapper/DashboardWrapper";

const LoginModule = lazy(() => import('./pages/Auth/Login/Login'));
const DashboardModule = lazy(() => import('./pages/Home/Dashboard'));

function App() {
  const routes = [
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: (
        <AuthWrapper>
          <Suspense fallback={<div>Loading...!</div>}>
            <LoginModule />
          </Suspense>
        </AuthWrapper>
      ),
    },
    {
      path: "/home/dashboard",
      element: (
        <DashboardWrapper>
          <Suspense fallback={<div>Loading...!</div>}>
            <DashboardModule />
          </Suspense>
        </DashboardWrapper>
      ),
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <>
            <Route key={index} path={route.path} element={route.element} />
          </>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
