import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="max-w-5xl mx-auto min-h-screen bg-blue-500">
      <Outlet />
    </div>
  );
};
