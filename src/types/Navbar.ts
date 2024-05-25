import { LucideIcon } from "lucide-react";

// export interface NavBarItems {
//   label: string;
//   href: string;
//   icon?: LucideIcon;
//   groupLinks?: groupLinks[];
// }
interface groupLinks {
  label: string;
  href: string;
  icon?: LucideIcon;
}
export type NavBarItems = {
  label: string;
  href: string;
  icon?: LucideIcon;
  groupLinks?: NavBarItems[];
};
