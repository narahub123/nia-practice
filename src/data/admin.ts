import type { AdminNavType } from "../types";

export const adminNavs: AdminNavType[] = [
  {
    id: "dashboard",
    title: "대시보드",
  },
  {
    id: "management",
    title: "관리",
  },
];

export const adminTitles: Record<string, any> = {
  dashboard: {
    title: "관리자 대쉬보드",
    desc: "모듈 관리를 할 수 있습니다.",
  },
  management: {
    title: "관리 대쉬보드",
    desc: "관리를 할 수 있습니다.",
  },
};
