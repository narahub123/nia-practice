import { design, hrd, management, marketing } from "../assets";
import type { JobCardType } from "../types";

export const fieldsOfJobs: JobCardType[] = [
  {
    id: "marketing",
    field: "마케팅",
    url: marketing,
  },
  {
    id: "design",
    field: "디자인",
    url: design,
  },
  {
    id: "management",
    field: "경영",
    url: management,
  },
  {
    id: "hrd",
    field: "HRD",
    url: hrd,
  },
];
