"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { NavbarConstants } from "@/constants/NavbarConstants";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl md:mx-auto z-50 mx-3", className)}
    >
      <Menu setActive={setActive} >
        <Link href={"/"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem active={active} setActive={setActive} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            {NavbarConstants?.map((link) => (
              <HoveredLink key={link.href} href={link.href}>
                {link.label}
              </HoveredLink>
            ))}
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
