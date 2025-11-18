import { useLocation } from "react-router-dom";
import { adminTitles } from "../../data";

export const AdminTitle = () => {
  const { pathname } = useLocation();

  const [_, category] = pathname.split("admin/");

  const curPage = category ? category : "dashboard";

  return (
    <div className="py-8 px-4">
      <p className="text-xl font-bold">{adminTitles[curPage].title}</p>
      <p className="text-gray-500">{adminTitles[curPage].desc}</p>
    </div>
  );
};
