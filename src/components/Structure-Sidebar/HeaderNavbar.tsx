"use client";

import { NavLinks } from "@/constants";
// Logo Images
import Image from "next/image";
import FullLogo from "@/app/assets/FullLogo.png";
import IconLogo from "@/app/assets/IconLogo.png";
// Logo Images

import dynamic from "next/dynamic";
import { NavBarItems } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Key } from "react";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
// Dynamic Components to Control the Problem Error: Hydration failed because the initial UI does not match what was rendered on the server.
const ThemeMode = dynamic(() => import("./NavbarComponents/ThemeMode"), {
  ssr: false,
});

const HeaderNavbar = () => {
  const pathname = usePathname();
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full border-b pt-2 lg:hidden">
      {/* Tablet Screen */}
      <div className="flex items-center justify-between p-2 max-md:hidden">
        <Image
          src={FullLogo}
          alt="Logo"
          width={100}
          height={25}
          priority={true}
        />
        <nav className="flex justify-between ">
          {NavLinks.map((Items: NavBarItems, index: Key | null | undefined) => (
            <Link
              href={Items.href}
              key={index}
              className={cn(
                Items.href === pathname
                  ? `"mx-1 border-r px-1 py-1 font-bold",${navigationMenuTriggerStyle()}`
                  : `"mx-1 border-r px-1 py-1 ",${navigationMenuTriggerStyle()}`,
              )}
            >
              <span
                className={cn(
                  "flex w-full justify-start gap-2",
                  navigationMenuTriggerStyle(),
                )}
              >
                {Items.icon && <Items.icon />} {Items.label}
              </span>
            </Link>
          ))}
        </nav>
        <ThemeMode />
      </div>

      {/* Mobile Screen */}
      <div className="flex  justify-between p-2 sm:hidden">
        <Image
          src={IconLogo}
          alt="Logo"
          width={25}
          height={25}
          priority={true}
        />
      </div>
    </header>
  );
};

export default HeaderNavbar;
/**********************
 * Note:
 * The navigation bar has three states:
 * Mobile phone screen size (width 425 pixels) showing the logo and hamburger menu
 * The tab's screen size (width is 768 pixels) and the page navigation bar appears at the top
 * Computer screen size and above (width 1024 pixels) The navigation sidebar appears
 **********************/

// <header className="sticky inset-x-0 top-0 z-30 w-full border-b border-gray-200 transition-all">
//   <nav className="h-20 bg-slate-50"></nav>
// </header>;
