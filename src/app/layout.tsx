import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { DesktopSideBar, MobileSideBar } from "@/components";
import { cn } from "@/lib/utils";
import HeaderNavbar from "@/components/Structure-Sidebar/HeaderNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Sidebar",
  description: "Designed by Mike Awad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "flex justify-start")}>
        <ThemeProvider>
          <DesktopSideBar className="h-screen w-60 border-r p-2 max-lg:hidden" />
          <main className="m-0 flex w-full flex-col p-0">
            <HeaderNavbar />
            <div className="ml-auto mr-auto mt-2 text-center md:w-[800px]">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
/**********************
 * Note:
 * Themes Provider use "suppressHydrationWarning" to work
 * ==================
 * to make the sidebar just view on Desktop and higher screen
 * DesktopSideBar className="max-lg:hidden"
 **********************/
