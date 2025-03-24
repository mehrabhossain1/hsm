/* eslint-disable react/no-unescaped-entities */
// import Image from "next/image";
import Link from "next/link";
import DrMadhukarPaiBio from "./DrMadhukarPaiBio";
import TedrosQuote from "@/components/Shared/SectionTitle/TedrosQuote";

const PublicHealthInsightsPage = () => {
    return (
        <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10">
            {/* Page Title Section */}
            <div className="relative w-full h-[120px] border-t-2">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 px-8 to-[#2D8CBB]/30 flex items-center">
                    <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-16 flex-wrap">
                        <h1 className="text-3xl font-bold text-center text-white">
                            Public Health Insights with{" "}
                            <a
                                href="https://www.linkedin.com/in/zarifrasul"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
                            >
                                Dr. Madhukar Pai:
                            </a>{" "}
                            A Global Activist
                        </h1>
                    </div>
                </div>
            </div>

            {/* Hero Section with Image */}
            {/* <div className="max-w-3xl mx-auto  h-[300px] relative">
                <Image
                    src="/interview/madhukar.jpg"
                    alt="Interview Section"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-75"
                />
            </div> */}
            <TedrosQuote />

            {/* Interview Content */}
            <div className="max-w-screen-md mx-auto px-8 py-8 bg-white ">
                {/* Question 1 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
                        Q. What drives your passion for public health, and what
                        keeps you motivated daily?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Madhukar Pai:</span> As a
                        child, I wanted to be a doctor. But once I started
                        medical school, I realized I wanted to prevent people
                        from falling sick ("turn off the tap") and not fix
                        things once people fell sick ("mop the floor"). This
                        realization made me become an epidemiologist and public
                        health researcher. I care about the science of disease
                        prevention, the science that keeps populations healthy.
                    </p>
                </div>

                {/* Add more questions here as needed */}
                {/* Question 2 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
                        Q. Who has been your source of inspiration in your
                        public health career?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Madhukar Pai:</span> Several
                        people inspired and mentored me in my career! I thanked
                        them all in this TEDx talk:{" "}
                        <a
                            href="https://www.youtube.com/watch?v=SjrzYzY98TQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600  underline font-medium"
                        >
                            https://www.youtube.com/watch?v=SjrzYzY98TQ
                        </a>
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        When I was a medical student, I was lucky to join a
                        network of socially oriented health professionals called{" "}
                        <a
                            href="https://mfcindia.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-medium"
                        >
                            Medio Friend Circle{" "}
                        </a>
                        (still active after 50 years!). This group opened my
                        eyes to social determinants of health, and the wider
                        sociopolitical context within which medical care
                        operates. MFC had and still has many inspiring people.
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        Once I joined my public health residency program at the
                        Christian Medical College in Vellore, South India, and
                        my PhD epidemiology program at the University of
                        California, Berkeley, I had other professors who
                        inspired and mentored me.
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        In short, very lucky to have had so many wonderful
                        teachers and mentors. Without them, I would be nothing.
                    </p>
                </div>

                {/* Question 3 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
                        Q. What do you consider your greatest accomplishment as
                        a faculty member at a globally renowned public health
                        institution?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Madhukar Pai:</span> My
                        biggest source of happiness and impact comes from
                        teaching and students. I am passionate about teaching
                        and mentorship. Many of my trainees are doing great work
                        all over the world and seeing their success and impact
                        makes me proud.
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        I have made several scholarly contributions to global
                        health pedagogy, including publications that speak to
                        the need to{" "}
                        <a
                            href="https://gh.bmj.com/content/6/4/e005649"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-medium"
                        >
                            reimagine
                        </a>{" "}
                        the way we teach global health, discourage{" "}
                        <a
                            href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(23)01629-X/abstract"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-medium"
                        >
                            saviorism
                        </a>
                        , and also make sure we address{" "}
                        <a
                            href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(23)00382-0/fulltext"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-medium"
                        >
                            glocal
                        </a>{" "}
                        needs (local as well as global). My teaching website
                        offers free access to all my teaching materials:
                        <a
                            href="https://www.teachepi.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-medium"
                        >
                            {" "}
                            https://www.teachepi.org/
                        </a>
                    </p>
                </div>

                {/* Question 4 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
                        Q. What is the most pressing global public health
                        challenge, and how would we address it with limited
                        resources?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Madhukar Pai:</span> In a
                        world increasingly threatened by climate crisis,
                        conflicts, pandemics, and widening economic inequities,
                        we are not dealing with one pressing issue. We are
                        dealing with polycrisis.
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        In these difficult times, I{" "}
                        <a
                            href="https://www.nature.com/articles/d41586-024-03413-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-medium"
                        >
                            see
                        </a>{" "}
                        young people as a huge source of hope. Young people have
                        great moral clarity. In fact, climate activism, gun
                        control, Black Lives Matter, Decolonizing Global Health,
                        and many other social movements today are mostly led by
                        youth.
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        So, anything we can do to back young people and open
                        leadership opportunities would be very impactful.
                    </p>
                </div>

                {/* Question 5 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
                        Q. What are the top three skills essential for success
                        in public health?
                    </h2>

                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Madhukar Pai:</span>
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify pl-6 text-[15px]">
                        <strong>1.</strong> Strong training in a specific area,
                        ability to strategically think about what needs to be
                        done and how to execute
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify pl-6 text-[15px]">
                        <strong>2.</strong> Good communication
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify pl-6 text-[15px]">
                        <strong>3.</strong> Ability to work with teams
                    </p>
                </div>

                {/* Question 6 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
                        Q. How has your perspective on public health evolved
                        over the years, and what message would you offer to
                        someone beginning their journey in this field?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Madhukar Pai:</span> Over
                        the years, I have grown to realize that the field of
                        global health is neither diverse nor truly global. Every
                        aspect of global health is dominated by individuals and
                        institutions in the Global North. Global South
                        scientists struggle to even get visas to attend
                        international conferences. They struggle to pay article
                        processing charges, and they are rarely invited to serve
                        on editorial boards. Their knowledge is mostly
                        invisible.
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        Global public health cannot be a pursuit or passion of
                        the most privileged. It needs to firmly center on people
                        with the greatest lived experience. As my colleagues and
                        I wrote in a{" "}
                        <a
                            href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)02323-7/abstract"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-medium"
                        >
                            commentary
                        </a>{" "}
                        published recently, this will require leadership by the
                        Global South and allyship by the Global North.
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        For young people starting their careers, I would
                        encourage them to find their “purpose” in life, their
                        passion. Once they find it, they will find a way to
                        become impactful.
                    </p>
                </div>

                <p className="text-[#001844] text-2xl mt-4 leading-relaxed text-center font-semibold bg-yellow-200 p-2 rounded-md">
                    Interview conducted by{" "}
                    <Link
                        href="/sizear"
                        className="text-blue-700 font-bold hover:underline"
                    >
                        Monaemul Islam Sizear
                    </Link>
                </p>
            </div>

            {/* Footer */}
            {/* Bio of Dr. Madhukar pai */}
            <DrMadhukarPaiBio />
        </div>
    );
};

export default PublicHealthInsightsPage;
