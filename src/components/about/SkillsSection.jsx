import AboutCard from "./AboutCard";

function SkillsSection() {
  const skillsData = {
    "Frameworks & Libraries": [
      "ReactJS",
      "NextJS",
      "Redux / Redux Sagas",
      "Tailwind CSS",
      "React Native",
      "expo",
      "NodeJS",
      "Socket.IO",
      "express",
      "NestJS",
      "prisma ORM",
    ],
    DBMS: ["MongoDB", "MySQL"],
  };

  return (
    <AboutCard title="Skills">
      <div className="w-full h-full px-2 pt-4">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <p className="text-base font-bold mt-4 first:mt-0">{category}</p>
            <div className="ml-4 flex gap-2 flex-col mt-2">
              {skills.map((skill, index) => (
                <li key={index} className="text-sm font-light">
                  {skill}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AboutCard>
  );
}

export default SkillsSection;
