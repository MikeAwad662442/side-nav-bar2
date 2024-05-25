"use client";
// import React from "react";
// // Logo Images
// import Image from "next/image";
// import FullLogo from "@/app/assets/FullLogo.png";
// // Logo Images
// import { NavbarAccordion } from "./NavbarComponents";
// // Dynamic Components to Control the Problem Error: Hydration failed because the initial UI does not match what was rendered on the server.
// import dynamic from "next/dynamic";

// const ThemeMode = dynamic(() => import("./NavbarComponents/ThemeMode"), {
//   ssr: false,
// });

import DesktopSideBar from "./DesktopSideBar";
const MobileSideBar = ({ className, ...props }: any) => {
  return (
    <>
      <header></header>
      <DesktopSideBar className={className} />
    </>

    // <nav className={className}>
    //   <header className=" mt-1 flex flex-col gap-3 border-b border-primary pb-2">
    //     <Image
    //       src={FullLogo}
    //       alt="Logo"
    //       width={230}
    //       height={50}
    //       priority={true}
    //     />
    //     <section className="flex flex-row justify-between">
    //       <ThemeMode />
    //       {/* <LanguageToggle /> */}
    //     </section>
    //   </header>
    //   <section className="mt-5 flex flex-col gap-3">
    //     <NavbarAccordion />
    //   </section>
    // </nav>
  );
};

export default MobileSideBar;
