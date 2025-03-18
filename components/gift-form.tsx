"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
    fullName: z
        .string()
        .min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
});

interface GiftFormProps {
    image: any;
}

export default function GiftForm({ image }: GiftFormProps) {
    // const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    // const [error, setError] = useState<string | null>(null);
    // const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
        },
    });

    // async function onSubmit(values: z.infer<typeof formSchema>) {
    //     setIsSubmitting(true);
    //     setError(null);

    //     try {
    //         const response = await fetch("/api/send-gift", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(values),
    //         });

    //         const data = await response.json();

    //         if (!response.ok) {
    //             throw new Error(
    //                 data.error || data.details || "Failed to send email"
    //             );
    //         }

    //         setIsSuccess(true);
    //         form.reset();
    //         toast({
    //             title: "Success!",
    //             description: "Your Knowledge Gift has been sent to your email.",
    //         });
    //     } catch (err) {
    //         console.error("Error:", err);
    //         const errorMessage =
    //             err instanceof Error ? err.message : "Unknown error occurred";
    //         setError(errorMessage);
    //         toast({
    //             title: "Error",
    //             description: errorMessage,
    //             variant: "destructive",
    //         });
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // }

    return (
        <div className="grid gap-8 md:grid-cols-2 items-center">
            <Card className="">
                <CardHeader className="px-0">
                    <CardTitle className="text-3xl font-bold text-red-500">
                        Gift Box
                    </CardTitle>
                    <CardDescription>
                        Complete the form below to request your gift box. Fields
                        marked with an{" "}
                        <span className="text-destructive">*</span> are
                        required.
                    </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-primary w-8 h-8"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">
                                Thank You!
                            </h3>
                            <p className="text-muted-foreground">
                                Your gift box request has been submitted
                                successfully. Please check your email for the
                                gift box.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => setIsSuccess(false)}
                            >
                                Submit Another Request
                            </Button>
                        </div>
                    ) : (
                        <Form {...form}>
                            <form
                                // onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                            >
                                {/* {error && (
                                    <div className="bg-destructive/10 text-destructive p-3 rounded-md text-sm">
                                        {error}
                                    </div>
                                )} */}
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Full Name
                                                <span className="text-destructive ml-1">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your full name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Email
                                                <span className="text-destructive ml-1">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your email address"
                                                    type="email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                We'll never share your email
                                                with anyone else.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    variant="destructive"
                                    className="w-full"
                                    // disabled={isSubmitting}
                                >
                                    {/* {isSubmitting ? "Submitting..." : "Submit"} */}
                                </Button>
                            </form>
                        </Form>
                    )}
                </CardContent>
            </Card>
            <div className="relative h-[400px] overflow-hidden order-first md:order-last">
                <Image
                    src={image || "/placeholder.svg?height=400&width=600"}
                    alt="Gift Box"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Premium Gift Box
                    </h3>
                    <p className="text-white/90">
                        Our carefully curated gift boxes contain premium items
                        selected just for you.
                    </p>
                </div> */}
            </div>
        </div>
    );
}
