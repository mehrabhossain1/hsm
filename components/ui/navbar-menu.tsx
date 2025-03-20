/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
    href,
    className,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
    href?: string;
    className?: string;
}) => {
    const router = useRouter();

    return (
        <div
            onClick={() => href && router.push(href)}
            onMouseEnter={() => setActive(item)}
            className="relative"
        >
            <motion.p
                transition={{ duration: 0.3 }}
                className={`cursor-pointer text-sm font-bold ${className} hover:opacity-[0.9] dark:text-white`}
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_12px)] left-1/2 transform -translate-x-1/2">
                            <motion.div
                                transition={transition}
                                layoutId="active" // layoutId ensures smooth animation
                                className="bg-[#08547a] dark:bg-black backdrop-blur-sm overflow-hidden  dark:border-white/[0.2] shadow-xl"
                            >
                                <motion.div
                                    layout // layout ensures smooth animation
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative text-white dark:bg-black dark:border-white/[0.2] flex justify-center items-center space-x-8 px-8 py-3 "
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link href={href} className="flex space-x-2">
            <Image
                src={src}
                width={140}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl"
            />
            <div>
                <h4 className="text-xl font-bold mb-1 text-white dark:text-white">
                    {title}
                </h4>
                <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent the event from bubbling up to the parent
    };

    return (
        <Link
            {...rest}
            className="text-white font-semibold hover:text-slate-200 flex items-center gap-1"
            onClick={handleClick} // Stop event propagation here
        >
            {children}
        </Link>
    );
};
