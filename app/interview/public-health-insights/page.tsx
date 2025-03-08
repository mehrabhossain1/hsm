/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const PublicHealthInsightsPage = () => {
  return (
    <div>
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 px-8 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-16 flex-wrap">
            <h1 className="text-4xl font-bold text-center text-white">
              Public Health Insights with Dr. Madhukar Pai: A Global Leader
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Section with Image */}
      <div className="max-w-3xl mx-auto my-4 h-[300px] relative">
        <Image
          src="/interview/Interview.jpg"
          alt="Interview Section"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </div>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-6 py-8">
        {/* Question 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#2D8CBB]">
            1. What drives your passion for public health, and what keeps you
            motivated daily?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            As a child, I wanted to be a doctor. But once I started medical
            school, I realized I wanted to prevent people from falling sick
            ("turn off the tap") and not fix things once people fell sick ("mop
            the floor"). This realization made me become an epidemiologist and
            public health researcher. I care about the science of disease
            prevention, the science that keeps populations healthy.
          </p>
        </div>

        {/* Add more questions here as needed */}
        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#2D8CBB]">
            2. Who has been your source of inspiration in your public health
            career?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            Several people inspired and mentored me in my career! I thanked them
            all in this TEDx talk:{" "}
            <a
              href="https://www.youtube.com/watch?v=SjrzYzY98TQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600  underline font-medium"
            >
              https://www.youtube.com/watch?v=SjrzYzY98TQ
            </a>
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            When I was a medical student, I was lucky to join a network of
            socially oriented health professionals called{" "}
            <a
              href="https://mfcindia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-medium"
            >
              Medio Friend Circle{" "}
            </a>
            (still active after 50 years!). This group opened my eyes to social
            determinants of health, and the wider sociopolitical context within
            which medical care operates. MFC had and still has many inspiring
            people.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            Once I joined my public health residency program at the Christian
            Medical College in Vellore, South India, and my PhD epidemiology
            program at the University of California, Berkeley, I had other
            professors who inspired and mentored me.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            In short, very lucky to have had so many wonderful teachers and
            mentors. Without them, I would be nothing.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#2D8CBB]">
            3. What do you consider your greatest accomplishment as a faculty
            member at a globally renowned public health institution?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            My biggest source of happiness and impact comes from teaching and
            students. I am passionate about teaching and mentorship. Many of my
            trainees are doing great work all over the world and seeing their
            success and impact makes me proud.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            I have made several scholarly contributions to global health
            pedagogy, including publications that speak to the need to{" "}
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
            needs (local as well as global). My teaching website offers free
            access to all my teaching materials:
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
      </div>
    </div>
  );
};

export default PublicHealthInsightsPage;
