"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed h-[60px] w-full">
      <div className="flex items-center space-x-2 p-4">
        <Button variant="link" asChild>
          <Link
            href="/"
            className={cn(pathname === "/" ? "font-semibold" : "")}
          >
            Home
          </Link>
        </Button>
        <Separator orientation="vertical" className="h-3" />
        <Button variant="link" asChild>
          <Link
            href="/about"
            className={cn(pathname === "/about" ? "font-semibold" : "")}
          >
            About
          </Link>
        </Button>
        <Separator orientation="vertical" className="h-3" />
        <Button variant="link" asChild>
          <Link
            href="/notes"
            className={cn(pathname === "/notes" ? "font-semibold" : "")}
          >
            Notes
          </Link>
        </Button>
      </div>
      <Separator orientation="horizontal" className="w-full" />
    </div>
  );
};
