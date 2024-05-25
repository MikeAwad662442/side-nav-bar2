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
    href: "/Group1",
    label: "Group1",
    icon: Heart,
    groupLinks: [
      {
        href: "/Group1/mike",
        label: "item1",
        icon: Angry,
      },
      {
        href: "/Group1/naya",
        label: "item2",
        icon: Frown,
      },
      {
        href: "/Group1/emma",
        label: "item3",
        icon: Annoyed,
      },
    ],
  },
  {
    href: "/Group2",
    label: "Group2",
    icon: HeartCrack,
    groupLinks: [
      {
        href: "/Group2",
        label: "item1",
        icon: ShieldPlus,
      },
      {
        href: "/Group2",
        label: "item2",
        icon: ShieldPlus,
      },
      {
        href: "/Group2",
        label: "item3",
        icon: ShieldPlus,
      },
    ],
  },
  {
    href: "/Group3",
    label: "Group3",
    icon: HeartHandshake,
    groupLinks: [
      {
        href: "/Group3",
        label: "item1",
        icon: Star,
      },
      {
        href: "/Group3",
        label: "item2",
        icon: Star,
      },
      {
        href: "/Group3",
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
