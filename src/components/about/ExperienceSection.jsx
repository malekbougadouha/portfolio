import TimelineCardContent from "./TimelineCardContent";
import AboutCard from "./AboutCard";

function ExperienceSection() {
  const experienceData = [
    {
      fromyear: "Jun '25",
      toyear: "Now",
      name: "Tactix Solutions",
      degree: "Web Developer",
      isCurrently: true,
      hasNext: true,
    },
    {
      fromyear: "Oct '24",
      toyear: "Mar '25",
      name: "Creo",
      degree: "Web Developer",
      hasNext: true,
    },
    {
      fromyear: "Feb '24",
      toyear: "Jun '24",
      name: "Envast",
      degree: "Web & Mobile Development Internship",
      hasNext: true,
    },
    {
      fromyear: "Jun '23",
      toyear: "Sep '23",
      name: "Envast",
      degree: "Mobile Development Internship",
      hasNext: true,
    },
    {
      fromyear: "Oct '22",
      toyear: "Jan '23",
      name: "Enterprise eSolutions",
      degree: "Web Development part-time job",
      hasNext: true,
    },
    {
      fromyear: "Jul '22",
      toyear: "Aug '22",
      name: "Enterprise eSolutions",
      degree: "Web Development Internship",
      hasNext: true,
    },
    {
      fromyear: "Feb '22",
      toyear: "May '22",
      name: "Tunisian Modern Newspaper",
      degree: "Web Development Internship",
      hasNext: false,
    },
  ];

  return (
    <AboutCard title="Experience">
      {experienceData.map((item, index) => (
        <TimelineCardContent
          key={index}
          hasNext={item.hasNext}
          fromyear={item.fromyear}
          toyear={item.toyear}
          name={item.name}
          degree={item.degree}
          isCurrently={item.isCurrently}
        />
      ))}
    </AboutCard>
  );
}

export default ExperienceSection;
