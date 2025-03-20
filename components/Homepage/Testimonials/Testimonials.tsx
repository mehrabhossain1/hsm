/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";

// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Separator } from "@/components/ui/separator";

import { Card, CardContent } from "@/components/ui/card";

// import { StarIcon } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ZarifImg from "@/public/testimonials/Zarif.jpeg";
import YemeImg from "@/public/testimonials/Yemi.jpg";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export function AnimatedTestimonialsDemo() {
    // const testimonials = [
    //   {
    //     quote:
    //       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    //     name: "Sarah Chen",
    //     designation: "Product Manager at TechFlow",
    //     src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    //   {
    //     quote:
    //       "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    //     name: "Michael Rodriguez",
    //     designation: "CTO at InnovateSphere",
    //     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    //   {
    //     quote:
    //       "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    //     name: "Emily Watson",
    //     designation: "Operations Director at CloudScale",
    //     src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    //   {
    //     quote:
    //       "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //     name: "James Kim",
    //     designation: "Engineering Lead at DataPro",
    //     src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    //   {
    //     quote:
    //       "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //     name: "Lisa Thompson",
    //     designation: "VP of Technology at FutureNet",
    //     src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    // ];

    const testimonials = [
        {
            name: "Dr. Zarif Rasul",
            link: "https://www.linkedin.com/in/zarif-rasul/",
            title: "Water Specialist",
            company: "World Bank",
            content:
                "For someone not directly involved with the health sector, Health System Matters is a great platform to stay updated on major policies and other developments in the sector. I particularly enjoy learning about leading experts and their contributions. This is an excellent resource for anyone working in the policy and development space. ",
            image: ZarifImg,
        },
        {
            name: "Yemelaknesh Wolde",
            link: "https://www.linkedin.com/in/yemelaknesh-yemi-wolde-md-msc-a3143b45/",
            title: "Health Financing and Systems Strengthening Expert",
            // company: "Open Development",
            content:
                "Health Systems Matter is a dynamic platform that empowers global health professionals with access to curated knowledge, career opportunities, and capacity-building initiatives. By providing timely resources and actionable insights, it creates a space for professionals to grow, collaborate, and drive meaningful change in public health.",
            image: YemeImg,
        },
    ];

    const [api, setApi] = useState<any>(null);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="bg-[#E2E4F0] to-white py-16 px-8">
            <div className="max-w-screen-xl mx-auto px-8 ">
                <div className="flex gap-5 items-center w-full mb-8">
                    <h1 className="text-4xl font-[1000] text-[#001844] whitespace-nowrap">
                        TESTIMONIALS
                    </h1>
                    <Separator
                        orientation="vertical"
                        className="h-24 w-1 bg-[#FFCE00]"
                    />

                    <p className="text-lg text-[#001844] font-semibold text-justify">
                        Users have shared their experiences, underscoring the
                        value of the Health Systems Matter platform. We are
                        truly honored to receive such positive feedback and
                        extend our heartfelt gratitude to everyone who has
                        shared their appreciation.
                    </p>
                </div>
                {/* <AnimatedTestimonials testimonials={testimonials} autoplay /> */}

                <div className="max-w-5xl mx-auto px-8">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 5000,
                                stopOnInteraction: true,
                                stopOnMouseEnter: true,
                                stopOnFocusIn: true,
                            }),
                        ]}
                        className="w-full"
                        setApi={setApi}
                    >
                        <CarouselContent className="-ml-2 md:-ml-4 pb-10">
                            {testimonials.map(
                                (testimonial: any, index: number) => (
                                    <CarouselItem
                                        key={index}
                                        className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2 pt-1 pb-4"
                                    >
                                        <div className="h-full">
                                            <Card className="bg-[#6BCBD5]/50 hover:bg-[#6BCBD5] dark:bg-gray-800  transition-all duration-300 h-full hover:scale-[1.01] dark:shadow-gray-900/30">
                                                <CardContent className="p-8 h-full flex flex-col">
                                                    {/* Profile Image */}
                                                    <div className="flex items-center gap-4 mb-6">
                                                        <Image
                                                            src={
                                                                testimonial.image
                                                            }
                                                            alt={
                                                                testimonial.name
                                                            }
                                                            width={100}
                                                            height={100}
                                                            className="w-28 h-28 rounded-full border-2 border-[#FFCE00] "
                                                        />
                                                        <div>
                                                            <Link
                                                                href={
                                                                    testimonial.link
                                                                }
                                                                className="font-semibold text-gray-900 dark:text-white text-xl hover:underline"
                                                            >
                                                                {
                                                                    testimonial.name
                                                                }
                                                            </Link>
                                                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                                                {
                                                                    testimonial.title
                                                                }
                                                            </div>
                                                            <div className="text-sm text-primary font-medium">
                                                                {
                                                                    testimonial.company
                                                                }
                                                            </div>
                                                            <Link
                                                                href={
                                                                    testimonial.link
                                                                }
                                                                className="text-sm font-medium cursor-pointer"
                                                            >
                                                                <FaLinkedin className="w-5 h-5" />{" "}
                                                                {/* {
                                                                    testimonial.link
                                                                } */}
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    {/* Star Ratings */}
                                                    {/* <div className="flex items-center mb-4">
                                                        {[...Array(5)].map(
                                                            (_, i) => (
                                                                <StarIcon
                                                                    key={i}
                                                                    className="w-5 h-5 text-[#FFCE00] fill-current"
                                                                />
                                                            )
                                                        )}
                                                    </div> */}

                                                    {/* Testimonial Content */}
                                                    <blockquote className="mb-6 text-gray-700 dark:text-gray-300 flex-grow text-justify">
                                                        "{testimonial.content}"
                                                    </blockquote>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                )
                            )}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12 border-0 bg-white/80 hover:bg-[#001844]  dark:bg-gray-800/80 dark:hover:bg-gray-800" />
                        <CarouselNext className="hidden md:flex -right-12 border-0 bg-white/80 hover:bg-[#001844] dark:bg-gray-800/80 dark:hover:bg-gray-800" />
                    </Carousel>
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_: any, index: number) => (
                            <button
                                key={index}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all duration-300",
                                    current === index
                                        ? "bg-primary w-6"
                                        : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                                )}
                                onClick={() => api?.scrollTo(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
