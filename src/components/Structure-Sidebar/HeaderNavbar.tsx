"use client";
// ===================== //
// Logo Images
import Image from "next/image";
import FullLogo from "@/app/assets/FullLogo.png";
import IconLogo from "@/app/assets/IconLogo.png";
// Logo Images
// ===================== //
import { usePathname } from "next/navigation";
import { NavbarTable, BurgerMenuAccordion } from "./NavbarComponents";
// ===================== //
// ==== Shadcn / ui ==== //
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
// ==== Shadcn / ui ==== //
// ===================== //
// Dynamic Components to Control the Problem Error: Hydration failed because the initial UI does not match what was rendered on the server.
import dynamic from "next/dynamic";
const ThemeMode = dynamic(() => import("./NavbarComponents/ThemeMode"), {
  ssr: false,
});
// ===================== //
const HeaderNavbar = () => {
  const pathname = usePathname();
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full border-b bg-white pt-2 dark:bg-black lg:hidden">
      {/* Tablet Screen */}
      <div className="flex items-center justify-between px-3 py-1 max-md:hidden">
        <Image
          src={FullLogo}
          alt="Logo"
          width={100}
          height={25}
          priority={true}
        />
        <nav className="flex justify-between ">
          <NavbarTable />
        </nav>
        <ThemeMode />
      </div>
      {/* Tablet Screen */}
      {/* Mobile Screen */}
      <div className="flex  justify-between p-2 sm:hidden">
        <Image
          src={IconLogo}
          alt="Logo"
          width={50}
          height={50}
          priority={true}
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetClose className="w-full text-start">
              <ThemeMode />
            </SheetClose>
            <Separator />
            <BurgerMenuAccordion />
          </SheetContent>
        </Sheet>
      </div>
      {/* Mobile Screen */}
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
