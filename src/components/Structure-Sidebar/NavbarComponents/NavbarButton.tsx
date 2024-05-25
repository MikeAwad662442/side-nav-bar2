// "use client";
import React from "react";
import { Button, ButtonProps } from "../../ui/button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// =================== //
interface NavbarButtonProps extends ButtonProps {
  icon?: LucideIcon;
}
// =================== //

const NavbarButton = ({
  icon: Icon,
  children,
  className,
  ...props
}: NavbarButtonProps) => {
  return (
    <Button
      variant="ghost"
      className={cn("justify-start gap-2", className)}
      {...props}
    >
      {Icon && <Icon size={20} />} {/* if icon is exists then show icon */}
      <span>{children}</span>
    </Button>
  );
};

export default NavbarButton;
/*************************
 * Not Used yet
 *
 *
 *************************/
