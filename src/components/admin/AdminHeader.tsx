import { Button } from "../common";
import { AdminHeaderNav } from "../../components";

export const AdminHeader = () => {
  return (
    <header className="w-full  border-b border-gray-200">
      <div className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold">관리자 대쉬보드</div>
        <div className="flex-1 flex justify-center">
          <AdminHeaderNav />
        </div>
        <Button className="bg-red-400 hover:bg-red-300 cursor-pointer">
          로그아웃
        </Button>
      </div>
    </header>
  );
};
