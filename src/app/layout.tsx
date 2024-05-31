import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider, DesktopSidebar, HeaderNavbar } from "@/components";
import { cn } from "@/lib/utils";

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
          <DesktopSidebar className="h-screen w-60 border-r p-2 max-lg:hidden" />
          <main className="m-0 flex w-full flex-col p-0">
            <HeaderNavbar />
            <div className="m-5 text-center md:ml-auto md:mr-auto md:w-[800px]">
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
