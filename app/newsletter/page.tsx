"use client";
// import { FaBook, FaHeartbeat, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";
import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";

const bookmarksData = [
    // {
    //     title: "Overview",
    //     href: "/newsletter/overview",
    //     description:
    //         "The Health Systems Matter Newsletter provides valuable insights and resources on global health, upcoming events, and career opportunities. Subscribers receive periodic emails, preferably monthly, featuring highlights from our recent social media posts, new blogs, interviews, and more. The newsletter also covers significant global health topics and news from around the world, keeping you updated and informed.",
    //     Icon: "https://img.freepik.com/free-photo/e-mail-global-communications-connection-social-networking-concept_53876-123795.jpg?t=st=1742593975~exp=1742597575~hmac=a08034ef264427686a0fc170d67350e8753e7505ff39b01f7366058b3d168219&w=996",
    // },
    {
        title: "Subscribe for newsletter",
        href: "/newsletter/subscribe-for-newsletter",
        description:
            "If you’re interested in receiving updates on public health issues, events, blogs, and interviews directly in your inbox, a single subscription is all you need. If the newsletter doesn’t appear in your inbox, please check your spam or junk folder.",
        Icon: "https://img.freepik.com/premium-vector/subscription-newsletter-pop-up-banner-template-flat-design_249405-203.jpg?w=826",
    },
    {
        title: "All previous issues",
        href: "/newsletter/all-previous-issues",
        description:
            "Explore our archive below to find all previous newsletters, neatly organized by month.",
        Icon: "https://img.freepik.com/premium-vector/email-service-concept-with-people-scene-flat-design-web-man-reading-new-letters-promotion-newsletters-using-mobile-app-vector-illustration-social-media-banner-marketing-material_9209-13070.jpg?w=996",
    },
];

// Define animation variants
const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const NewsletterPage = () => {
    return (
        <div>
            {/* Page Title Section */}
            <div className="relative w-full h-[150px]  border-t-2 border-[#FFCE00]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
                    <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-16 flex-wrap gap-6">
                        <h1 className="text-5xl font-[1000] text-white">
                            Newsletter
                        </h1>
                        <p className="text-base max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto">
                            The Health Systems Matter Newsletter provides
                            valuable insights and resources on global health,
                            upcoming events, and career opportunities.
                            Subscribers receive periodic emails, preferably
                            monthly, featuring highlights from our recent social
                            media posts, new blogs, interviews, and more. The
                            newsletter also covers significant global health
                            topics and news from around the world, keeping you
                            updated and informed.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-screen-xl mx-auto py-16 px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {bookmarksData.map((bookmark, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                        <BookMarksSectionCard
                            title={bookmark.title}
                            description={bookmark.description}
                            href={bookmark.href}
                            Icon={bookmark.Icon}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default NewsletterPage;
