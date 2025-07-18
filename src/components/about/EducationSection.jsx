import TimelineCardContent from "./TimelineCardContent";
import AboutCard from "./AboutCard";

function EducationSection() {
  const educationData = [
    {
      fromyear: 2021,
      toyear: 2024,
      name: "Polytechnic School of Sousse",
      degree: "software engineering degree",
      hasNext: true,
    },
    {
      fromyear: 2018,
      toyear: 2021,
      name: "Higher School of Science and Technology of Hammam Sousse",
      degree:
        "Bachelor degree in science and technology of information and communication",
      hasNext: false,
    },
  ];

  return (
    <AboutCard title="Education">
      {educationData.map((item, index) => (
        <TimelineCardContent
          key={index}
          hasNext={item.hasNext}
          fromyear={item.fromyear}
          toyear={item.toyear}
          name={item.name}
          degree={item.degree}
        />
      ))}
    </AboutCard>
  );
}

export default EducationSection;
