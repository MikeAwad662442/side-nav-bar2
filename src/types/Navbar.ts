import { LucideIcon } from "lucide-react";
export type NavBarItems = {
  label: string;
  href: string;
  icon?: LucideIcon;
  groupLinks?: NavBarItems[];
};
