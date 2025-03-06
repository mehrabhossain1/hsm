const MoreAboutMe = () => {
  return (
    <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 py-16 ">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center relative pb-2">
        More About Me
        <span className="absolute left-1/2 bottom-0 w-16 md:w-72 h-1 bg-blue-500 -translate-x-1/2 rounded-full"></span>
      </h2>

      {/* Career Profile/Professional Endeavors  */}
      <div>
        <h2 className="text-2xl md:text-2xl font-bold text-gray-600 pt-16 underline underline-offset-4">
          Career Profile/Professional Endeavors
        </h2>

        <p className="text-gray-700 leading-relaxed text-justify pt-4">
          Monaemul Islam Sizear is an accomplished Urban Public Health
          Anthropologist and Health System Activist with over 12 years of
          experience in research and implementation across the government and
          development sectors in Bangladesh. As the founder of Health Systems
          Matter, Sizear is dedicated to advancing global health discourse and
          disseminating knowledge to foster impactful solutions in public
          health.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify pt-4">
          Currently, Sizear serves as a Technical Advisor at Open Development
          (OD), an international organization based in the USA. In this role, he
          contributes to the USAID-funded global project, Health System for
          Tuberculosis (HS4TB), which focuses on strengthening health systems.
          Additionally, he serves as the Organizing Secretary of the Public
          Health Foundation of Bangladesh (PHFBD), a leading organization
          promoting evidence-based public health practices and knowledge at the
          national level.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify pt-4">
          Public health is not only Sizear’s profession but also his passion.
          Over the past decade, he has concentrated on strengthening health
          systems and policies through a human-centered approach to enhance
          population health. His multidisciplinary education, combined with
          hands-on experience, has provided him with a deep understanding of the
          systemic causes of poor health, including poverty, low education
          levels, and inadequate political leadership.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify pt-4">
          Sizear recognizes that health interventions alone are insufficient for
          sustainable change. As an advocate for health system, he engages in
          activism to promote public health. The Health Systems Matter
          initiative reflects his commitment to exploring global health
          challenges through exploring knowledge and its systematic
          discrimination in a greater arena.
        </p>
      </div>
    </div>
  );
};

export default MoreAboutMe;
