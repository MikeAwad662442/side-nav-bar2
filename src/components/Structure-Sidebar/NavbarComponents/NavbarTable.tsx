import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import { NavBarItems } from "@/types";

import { Key, useState } from "react";
import Link from "next/link";
// ===================== //
// ==== Shadcn / ui ==== //
import { cn } from "@/lib/utils";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
// ==== Shadcn / ui ==== //
// ===================== //
const NavbarTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const pathname = usePathname();
  return (
    <Menubar className="justify-between border-0">
      {NavLinks.map((Items: NavBarItems, index: Key | null | undefined) =>
        Items.groupLinks ? (
          <MenubarMenu key={index}>
            <MenubarTrigger
              className=" bg-red-400"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className={cn(
                  "hover:gb-ring flex w-full justify-start gap-2",
                  `${pathname.includes(Items.href) ? "font-bold" : ""}`,
                  "",
                )}
              >
                {Items.icon && <Items.icon />} {Items.label}
              </span>
            </MenubarTrigger>

            <MenubarContent className={isOpen ? "block" : "hidden"}>
              {/* <MenubarContent> */}
              {Items.groupLinks.map(
                (i: NavBarItems, index: Key | null | undefined) => (
                  <MenubarItem key={index}>
                    <Link
                      href={i.href}
                      className={i.href === pathname ? "font-bold" : ""}
                    >
                      <span className={cn("flex w-full justify-start gap-2")}>
                        {i.icon && <i.icon />} {i.label}
                      </span>
                    </Link>
                  </MenubarItem>
                ),
              )}
            </MenubarContent>
          </MenubarMenu>
        ) : (
          <MenubarMenu key={index}>
            <MenubarTrigger>
              <Link
                href={Items.href}
                className={Items.href === pathname ? "font-bold" : ""}
              >
                <span className={cn("flex w-full justify-start gap-2")}>
                  {Items.icon && <Items.icon />} {Items.label}
                </span>
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
        ),
      )}
    </Menubar>
  );
};

export default NavbarTable;
