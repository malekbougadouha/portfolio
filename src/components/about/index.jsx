import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";

function About({ propref }) {
  return (
    <div
      ref={propref}
      className="w-full h-auto md:pl-12 pl-6 flex pt-6 text flex-col"
    >
      <p className="md:text-6xl text-3xl font-black text-stroke-1 text-[#121212]">
        About Me
      </p>
      <div className="flex flex-wrap flex-col -ml-6 md:flex-row gap-8 items-center md:items-start py-6 justify-center">
        <div className="flex gap-4 flex-col">
          <EducationSection />
          <div className="block xl:hidden">
            <SkillsSection />
          </div>
        </div>

        <ExperienceSection />
        <div className="hidden xl:block">
          <SkillsSection />
        </div>
      </div>
    </div>
  );
}

export default About;
