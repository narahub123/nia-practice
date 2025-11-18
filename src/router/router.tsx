import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts";
import { LandingPage } from "../pages";

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
]);
