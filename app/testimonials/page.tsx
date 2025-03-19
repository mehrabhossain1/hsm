import { AnimatedTestimonialsDemo } from "@/components/Homepage/Testimonials/Testimonials";
// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbList,
//     BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import Link from "next/link";

const Testimonials = () => {
    return (
        <div className="bg-gradient-to-r from-[#01748D]/10 via-white to-[#01748D]/10">
            {/* Page Title Section */}
            {/* <div className="relative w-full h-[120px] border-t-2 border-[#FFCE00]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#01748D]/90  to-[#01748D]/30 flex items-center">
                    <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-16 flex-wrap gap-6">
                        <h1 className=" md:text-4xl font-bold text-white">
                            Testimonial
                        </h1>
                        <p className="text-xl max-w-3xl text-gray-100 font-semibold my-8 text-justify w-full md:w-auto">
                            The Resources section aspire to be a repository of
                            essential resources on health systems and global
                            health.
                        </p>
                    </div>
                </div>
            </div>

            <Breadcrumb className="py-4 px-16 max-w-screen-xl mx-auto border-b">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link href="/" className="text-gray-500">
                            HOME
                        </Link>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator className="text-gray-600" />
                    <BreadcrumbItem>
                        <Link
                            href="/testimonials"
                            className="bg-[#FFCE00] text-black px-2 rounded-sm py-1"
                        >
                            Testimonial
                        </Link>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb> */}

            <AnimatedTestimonialsDemo />
        </div>
    );
};

export default Testimonials;
