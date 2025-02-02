"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";

export function NavbarDemo() {
  return (
    <div className="w-full flex items-center justify-center">
      <Navbar className="top-2 border-t-2 mt-2 border-t-[#FEC53F]" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("inset-x-0 mx-auto z-50 w-full", className)}>
      <Menu setActive={setActive}>
        <Link href="/">
          <AiFillHome className="text-lg" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">About HSM</HoveredLink>
            <HoveredLink href="/interface-design">Vision & Mission</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Resources & Bookmarks"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="News & Newsletter"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blog & Interview">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/" className="text-sm">
          Youtube
        </Link>
        <Link href="/" className="text-sm">
          Contact
        </Link>
        <Link href="/" className="text-sm">
          <Button
            borderRadius="1.75rem"
            className="text-[#FEC53F]"
            borderClassName=""
          >
            Sizear
          </Button>
        </Link>
      </Menu>
    </div>
  );
}
