import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { NavBarItems } from "@/types";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Key } from "react";
// =================== //
const NavbarAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {NavLinks.map((Items: NavBarItems, index: Key | null | undefined) =>
        Items.groupLinks ? (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              <p className="flex w-full justify-start gap-5">
                {Items.icon && <Items.icon />} {Items.label}
              </p>
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent>
              {Items.groupLinks.map(
                (i: NavBarItems, index: Key | null | undefined) => (
                  <Link
                    key={index}
                    href={i.href}
                    className="flex w-full justify-start gap-5 hover:bg-white"
                  >
                    {i.icon && <i.icon />} {i.label}
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
                className="w-50% flex justify-start gap-5 hover:bg-white"
              >
                {Items.icon && <Items.icon />} {Items.label}
              </Link>
            </AccordionTrigger>
          </AccordionItem>
        ),
      )}
    </Accordion>
  );
};

export default NavbarAccordion;
