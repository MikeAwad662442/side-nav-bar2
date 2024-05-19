import React from "react";
// Logo Images
import FullLogo from "@/app/assets/FullLogo.png";
import Image from "next/image";
import dynamic from "next/dynamic";
import { NavLinks } from "@/constants/NavBar";
import { NavBarItems } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  LanguageToggle,
  NavbarAccordion,
  NavbarButton,
} from "./NavbarComponents";
const ThemeMode = dynamic(() => import("./NavbarComponents/ThemeMode"), {
  ssr: false,
});
const SideBar = ({ className, ...props }: any) => {
  return (
    <nav
      className={className}
      // className={
      //   " fixed hidden h-screen flex-1 flex-col border-r border-zinc-600 pl-2 pr-4 md:flex md:w-60"
      // }
    >
      <header className=" border-primary mt-1 flex flex-col gap-3 border-b pb-2">
        <Image
          src={FullLogo}
          alt="Logo"
          width={230}
          height={50}
          priority={true}
        />
        <section className="flex flex-row justify-between">
          <ThemeMode />
          {/* <LanguageToggle /> */}
        </section>
      </header>
      <section className="mt-5 flex flex-col gap-3">
        <NavbarAccordion />
      </section>
    </nav>
  );
};

export default SideBar;
