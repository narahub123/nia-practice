import { Outlet } from "react-router-dom";
import { AdminHeader, AdminTitle } from "../components";

export const AdminLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <AdminHeader />
      <main className="flex-1 w-full bg-gray-50">
        <div className="max-w-7xl bg-white h-full mx-auto">
          <AdminTitle />
          <Outlet />
        </div>
      </main>
    </div>
  );
};
