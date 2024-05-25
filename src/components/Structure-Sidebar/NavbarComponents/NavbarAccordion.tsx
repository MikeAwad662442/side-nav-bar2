// "use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SheetClose } from "@/components/ui/sheet";
import { NavLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { NavBarItems } from "@/types";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Key } from "react";
// =================== //
const NavbarAccordion = () => {
  const pathname = usePathname();
  return (
    <Accordion type="single" collapsible className="w-full">
      {NavLinks.map((Items: NavBarItems, index: Key | null | undefined) =>
        Items.groupLinks ? (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              <span
                className={cn(
                  "flex w-full justify-start gap-2",
                  `${pathname.includes(Items.href) ? "text-lg" : ""}`,
                )}
              >
                {Items.icon && <Items.icon />} {Items.label}
              </span>
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent>
              {Items.groupLinks.map(
                (i: NavBarItems, index: Key | null | undefined) => (
                  <Link
                    key={index}
                    href={i.href}
                    className={i.href === pathname ? "text-lg" : ""}
                  >
                    <span className={cn("flex w-full justify-start gap-2")}>
                      {i.icon && <i.icon />} {i.label}
                    </span>
                  </Link>
                ),
              )}
            </AccordionContent>
          </AccordionItem>
        ) : (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              <Link
                href={Items.href}
                className={Items.href === pathname ? "text-lg" : ""}
              >
                <span className={cn("flex w-full justify-start gap-2")}>
                  {Items.icon && <Items.icon />} {Items.label}
                </span>
              </Link>
            </AccordionTrigger>
          </AccordionItem>
        ),
      )}
    </Accordion>
  );
};

export default NavbarAccordion;

const BurgerMenuAccordion = () => {
  const pathname = usePathname();
  return (
    <Accordion type="single" collapsible className="w-full">
      {NavLinks.map((Items: NavBarItems, index: Key | null | undefined) =>
        Items.groupLinks ? (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              <span
                className={cn(
                  "flex w-full justify-start gap-2",
                  `${pathname.includes(Items.href) ? "text-lg" : ""}`,
                )}
              >
                {Items.icon && <Items.icon />} {Items.label}
              </span>
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent>
              {Items.groupLinks.map(
                (i: NavBarItems, index: Key | null | undefined) => (
                  <Link
                    href={i.href}
                    key={index}
                    className={i.href === pathname ? "text-lg" : ""}
                  >
                    <SheetClose className="w-full text-start">
                      <span className={cn("flex w-full justify-start gap-2")}>
                        {i.icon && <i.icon />} {i.label}
                      </span>
                    </SheetClose>
                  </Link>
                ),
              )}
            </AccordionContent>
          </AccordionItem>
        ) : (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              <Link
                href={Items.href}
                className={Items.href === pathname ? "text-lg" : ""}
              >
                <SheetClose className="w-full text-start">
                  <span className={cn("flex w-full justify-start gap-2")}>
                    {Items.icon && <Items.icon />} {Items.label}
                  </span>
                </SheetClose>
              </Link>
            </AccordionTrigger>
          </AccordionItem>
        ),
      )}
    </Accordion>
  );
};

export { BurgerMenuAccordion };
/**********************
 * Note:
 * The Accordion structure
 **********************/
