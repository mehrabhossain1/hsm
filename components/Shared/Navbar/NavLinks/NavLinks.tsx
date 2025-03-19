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
import { usePathname } from "next/navigation";

export function NavbarDemo() {
    const pathname = usePathname();

    // Define different background & text colors for specific routes
    const routeStyles: Record<string, { bg: string; text: string }> = {
        "/": { bg: "bg-[#2D8CBB]", text: "text-white" },

        // About
        "/about/about-hsm": { bg: "bg-[#00DFC0]", text: "text-gray-800" },
        "/about/vision-and-mission": {
            bg: "bg-[#01CAC2]",
            text: "text-gray-800",
        },
        "/about/activities-and-approach": {
            bg: "bg-[#8EDBED]",
            text: "text-gray-800",
        },
        "/about/why-health-systems-matter": {
            bg: "bg-[#6ACBD4]",
            text: "text-gray-800",
        },
        // About

        // resources-and-bookmarks
        "/resources-and-bookmarks": { bg: "bg-[#2D8CBB]", text: "text-white" },
        // resources-and-bookmarks

        // resources
        "/resources": { bg: "bg-[#01748D]", text: "text-white" },
        "/resources/overview": { bg: "bg-blue-800", text: "text-white" },

        // resources

        "/contact": { bg: "bg-[#CDEDEC]", text: "text-gray-900" },
        "/dashboard": { bg: "bg-gray-900", text: "text-gray-300" },
        // "/sizear": { bg: "bg-[#6ACBD4]", text: "text-gray-500" },
        "/resources/essential-reading-list": {
            bg: "bg-blue-700/90",
            text: "text-white",
        },
    };

    // Default colors if route not specified
    const { bg, text } = routeStyles[pathname] || {
        bg: "bg-[#2D8CBB]", // Default background
        text: "text-white", // Default text color
    };

    return (
        // <div className={`w-full ${bg} flex items-center justify-center`}>
        //     <Navbar className={`${text}`} />
        // </div>
        <div className={`w-full ${bg} flex items-center justify-center`}>
            <Navbar className={`${text}`} />
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
                <Link href="/" className={className}>
                    <AiFillHome className="text-base" />
                </Link>

                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="ABOUT"
                    href="/about"
                    className={className}
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/about/about-hsm">
                            <Info className="w-4 h-4" /> About HSM
                        </HoveredLink>
                        <HoveredLink href="/about/vision-and-mission">
                            <Eye className="w-4 h-4" /> Vision & Mission
                        </HoveredLink>
                        <HoveredLink href="/about/activities-and-approach">
                            <Activity className="w-4 h-4" /> Activities &
                            Approach
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
                    className={className}
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
                    className={className}
                    href="/news-and-newsletter"
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
                    item="INTERVIEW & BLOG"
                    className={className}
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/interview">
                            <Mic className="w-4 h-4" /> INTERVIEW
                        </HoveredLink>
                        <HoveredLink href="/blog">
                            <PenSquare className="w-4 h-4" /> BLOG
                        </HoveredLink>
                    </div>
                </MenuItem>
                <Link href="/youtube" className={className}>
                    <p className="text-sm font-bold">YOUTUBE</p>
                </Link>
                <Link href="/contact" className={className}>
                    <p className="text-sm font-bold">CONTACT</p>
                </Link>
            </Menu>
        </div>
    );
}
