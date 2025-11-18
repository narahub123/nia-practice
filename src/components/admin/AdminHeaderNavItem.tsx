import { Link } from "react-router-dom";
import type { AdminNavType } from "../../types";

interface AdminHeaderNavItemProps {
  item: AdminNavType;
}

export const AdminHeaderNavItem = ({ item }: AdminHeaderNavItemProps) => {
  const { id, title } = item;

  return <Link to={id}>{title}</Link>;
};
