import Link from "next/link";
import { usePathname } from "next/navigation";
import { Key } from "react";
import { cn } from "@/lib/utils";
// ===================== //
import { NavLinks } from "@/constants";
// ===================== //
import { NavBarItems } from "@/types/Navbar";

const NavbarAccordion = () => {
  const pathname = usePathname();
  return (
    <section className="mt-2">
      <ul className="flex flex-col">
        {NavLinks.map((Items: NavBarItems, index: Key | null | undefined) =>
          Items.groupLinks ? (
            <li key={index} className="m-1 p-1">
              <span
                className={cn(
                  "flex w-full justify-start gap-2 rounded-full border px-2 py-1 hover:bg-foreground hover:text-primary",
                  `${pathname.includes(Items.href) ? "text-lg" : ""}`,
                )}
              >
                {Items.icon && <Items.icon />} {Items.label}
              </span>
              <ul>
                {Items.groupLinks.map(
                  (i: NavBarItems, index: Key | null | undefined) => (
                    <li key={index}>
                      <Link
                        href={i.href}
                        className={i.href === pathname ? "text-lg" : ""}
                      >
                        <span className={cn("flex w-full justify-start gap-2")}>
                          {i.icon && <i.icon />} {i.label}
                        </span>
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </li>
          ) : (
            <li key={index} className="m-1 p-1">
              <Link
                href={Items.href}
                className={Items.href === pathname ? "text-lg" : ""}
              >
                <span
                  className={cn(
                    "flex w-full justify-start gap-2 rounded-full border px-2 py-1 hover:bg-foreground hover:text-primary",
                    `${pathname.includes(Items.href) ? "text-lg" : ""}`,
                  )}
                >
                  {Items.icon && <Items.icon />} {Items.label}
                </span>
              </Link>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default NavbarAccordion;
