import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <>랜딩 페이지</>,
      },
      {
        path: "/login",
        element: <>로그인</>,
      },
    ],
  },
]);
