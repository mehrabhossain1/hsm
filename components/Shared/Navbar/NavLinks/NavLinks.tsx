"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import {
  BookOpen,
  Bookmark,
  Newspaper,
  Mail,
  PenSquare,
  Mic,
  Info,
  Eye,
  Activity,
  HelpCircle,
} from "lucide-react";

export function NavbarDemo() {
  return (
    <div className="w-full bg-[#2D8CBB] flex items-center justify-center">
      <Navbar className="" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "inset-x-0 mx-auto z-50 w-full border-t-2 border-[#FFCE00]",
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
            <HoveredLink href="/about/about-hsm">
              <Info className="w-4 h-4" /> About HSM
            </HoveredLink>
            <HoveredLink href="/about/vision-and-mission">
              <Eye className="w-4 h-4" /> Vision & Mission
            </HoveredLink>
            <HoveredLink href="/about/activities-and-approach">
              <Activity className="w-4 h-4" /> Activities & Approach
            </HoveredLink>
            <HoveredLink href="/about/why-health-systems-matter">
              <HelpCircle className="w-4 h-4" /> Why HSM
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
            <HoveredLink href="/resources">
              <BookOpen className="w-4 h-4" /> RESOURCES
            </HoveredLink>
            <HoveredLink href="/bookmarks">
              {" "}
              <Bookmark className="w-4 h-4" /> BOOKMARKS
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="NEWS & NEWSLETTER"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/news">
              <Newspaper className="w-4 h-4" /> NEWS
            </HoveredLink>
            <HoveredLink href="/newsletter">
              <Mail className="w-4 h-4" /> NEWSLETTER
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          href="/blog-and-interview"
          item="BLOG & INTERVIEW"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/blog">
              <PenSquare className="w-4 h-4" /> BLOG
            </HoveredLink>
            <HoveredLink href="/interview">
              <Mic className="w-4 h-4" /> INTERVIEW
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href="/" className="text-sm font-semibold">
          YOUTUBE
        </Link>
        <Link href="/" className="text-sm font-semibold">
          CONTACT
        </Link>
      </Menu>
    </div>
  );
}
