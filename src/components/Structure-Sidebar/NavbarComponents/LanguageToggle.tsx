// "use client";
// import React, { useEffect, useState } from "react";
// import { Languages } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import ar from "@/assets/ar.webp";
// import en from "@/assets/en.webp";
// import fr from "@/assets/fr.webp";
// import Image from "next/image";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { useTranslations } from "next-intl";
// import { Link } from "@/navigation";
// interface LanguageProps {}

// const LanguageToggle = () => {
//   const t = useTranslations("LangInfo");
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) {
//     return <Button variant="ghost" size="icon" disabled={true}></Button>;
//   }
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           <Languages />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         {/* <DropdownMenuItem onClick={() => setTheme("light")}> */}
//         <DropdownMenuItem>
//           <Link locale="ar" href="/" className="flex flex-row gap-2">
//             <Image src={ar} alt={t("AR")} width={25} height={25} />
//             <span>{t("AR")}</span>
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuItem>
//           <Link locale="en" href="/" className="flex flex-row gap-2">
//             <Image src={en} alt={t("EN")} width={25} height={25} />
//             <span>{t("EN")}</span>
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuItem>
//           <Link locale="fr" href="/" className="flex flex-row gap-2">
//             <Image src={fr} alt={t("FR")} width={25} height={25} />
//             <span>{t("FR")}</span>
//           </Link>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export default LanguageToggle;
