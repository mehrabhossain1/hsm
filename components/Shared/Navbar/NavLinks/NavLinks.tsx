"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="w-full bg-[#186076] flex items-center justify-center">
      <Navbar className="" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "inset-x-0 mx-auto w-full border-t-2 border-[#FFCE00]",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <AiFillHome className="text-base" />
        </Link>
        <MenuItem
          setActive={setActive}
          active={active}
          item="ABOUT"
          href="/about"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about/about-hsm">About HSM</HoveredLink>
            <HoveredLink href="/about/vision-and-mission">
              Vision & Mission
            </HoveredLink>
            <HoveredLink href="/about/activities-and-approach">
              Activities & Approach
            </HoveredLink>
            <HoveredLink href="/about/why-health-systems-matter">
              Why Health Systems Matter
            </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item="RESOURCES & BOOKMARKS"
          href="/resources-and-bookmarks"
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
          item="NEWS & NEWSLETTERS"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          href="/blog-and-interview"
          item="BLOG & INTERVIEW"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/" className="text-sm">
          YOUTUBE
        </Link>
        <Link href="/" className="text-sm">
          CONTACT
        </Link>
      </Menu>
    </div>
  );
}
