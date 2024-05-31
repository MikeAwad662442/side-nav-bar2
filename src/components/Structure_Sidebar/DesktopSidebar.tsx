"use client";
// ===================== //
// Logo Images
import Image from "next/image";
import FullLogo from "@/app/assets/FullLogo.png";
// Logo Images
// ===================== //
// Dynamic Components to Control the Problem Error: Hydration failed because the initial UI does not match what was rendered on the server.
import dynamic from "next/dynamic";
import NavbarAccordion from "./NavbarComponents/NavbarAccordion";
const ThemeMode = dynamic(() => import("./NavbarComponents/ThemeMode"), {
  ssr: false,
});
// ===================== //
const DesktopSidebar = ({ className }: { className: string }) => {
  return (
    <nav className={className}>
      <header className=" mt-1 flex flex-col gap-3 border-b border-primary pb-2">
        <Image
          src={FullLogo}
          alt="Logo"
          width={230}
          height={50}
          priority={true}
        />
        <section className="flex flex-row items-center justify-between px-2">
          <ThemeMode />
          {/* <LanguageToggle /> */}
        </section>
      </header>
      <NavbarAccordion />
    </nav>
  );
};

export default DesktopSidebar;
