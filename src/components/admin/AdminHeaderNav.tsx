import { adminNavs } from "../../data";
import { AdminHeaderNavItem } from "./AdminHeaderNavItem";

export const AdminHeaderNav = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        {adminNavs.map((item) => (
          <li className="flex" key={item.id}>
            <AdminHeaderNavItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
