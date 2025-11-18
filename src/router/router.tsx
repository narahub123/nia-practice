import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, RootLayout } from "../layouts";
import { LandingPage } from "../pages";
import { AdminIndex } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <>로그인</>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminIndex />,
      },
      {
        path: ":category",
        element: <>메인</>,
      },
    ],
  },
]);
