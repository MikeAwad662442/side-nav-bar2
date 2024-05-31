"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";

const ThemeMode = () => {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      className="rounded-xl border p-[2px]  hover:bg-foreground"
      onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
    >
      {dark ? (
        <Sun size={20} className=" hover:text-primary" />
      ) : (
        <MoonStar size={20} className=" hover:text-primary" />
      )}
    </button>
  );
};

export default ThemeMode;

/**********************
 * Note:
 * we use this component to implement theme mode light | dark
 * The structure should be as it is here. I tried to change it more than once, but the icon always appears like the theme and not the other way around, so copy this content as it is.
 **********************/
