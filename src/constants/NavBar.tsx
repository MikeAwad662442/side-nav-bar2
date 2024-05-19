/* Notes:
 * If You want to use React-Icons in any File it MUST to be .tsx NOt .ts 😄
 * and be Notes to add in TypeScript as "icon?: JSX.Element" 🔥
 */

import { NavBarItems } from "@/types";
import {
  Angry,
  Annoyed,
  Frown,
  Heart,
  HeartCrack,
  Home,
  LibraryBig,
  HeartHandshake,
  ShieldPlus,
  Star,
} from "lucide-react";

export const NavLinks: NavBarItems[] = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/",
    label: "Group1",
    icon: Heart,
    groupLinks: [
      {
        href: "/",
        label: "item1",
        icon: Angry,
      },
      {
        href: "/",
        label: "item2",
        icon: Frown,
      },
      {
        href: "/",
        label: "item3",
        icon: Annoyed,
      },
    ],
  },
  {
    href: "/",
    label: "Group2",
    icon: HeartCrack,
    groupLinks: [
      {
        href: "/",
        label: "item1",
        icon: ShieldPlus,
      },
      {
        href: "/",
        label: "item2",
        icon: ShieldPlus,
      },
      {
        href: "/",
        label: "item3",
        icon: ShieldPlus,
      },
    ],
  },
  {
    href: "/",
    label: "Group3",
    icon: HeartHandshake,
    groupLinks: [
      {
        href: "/",
        label: "item1",
        icon: Star,
      },
      {
        href: "/",
        label: "item2",
        icon: Star,
      },
      {
        href: "/",
        label: "item3",
        icon: Star,
      },
    ],
  },
  {
    href: "/about",
    label: "ABOUT_US",
    icon: LibraryBig,
  },
];
