import ProjCard from "./ProjCard";
import GithubCard from "./GithubCard";

function ProjectsGrid() {
  const projectsData = [
    {
      url: "#",
      name: "BystroSync",
      description:
        "A mobile app for online restaurant reservations and pre-orders",
      technologies: "React Native, expo, nextJS, nodeJS, socket.IO",
      image: require("../../../public/splash.png"),
    },
    {
      url: "#",
      name: "ESS Mobile App",
      description: "Development of the mobile app for ESS football team",
      technologies: "React Native, expo",
      image: require("../../../public/ess.png"),
    },
    {
      url: "https://github.com/malek0x00/portfolio",
      name: "This Portfolio",
      description:
        "The source code for this portfolio, built and hosted on the vercel platform",
      technologies: "NextJS, tailwind CSS",
      image: require("../../../public/logo_light.png"),
    },
    {
      url: "https://s7equityinvestors.ca/",
      name: "S7equity Investors portal",
      description:
        "Development of a mobile and web app for the investors of the real estate investment company S7equity.",
      technologies: "React Native, expo",
      image: require("../../../public/s7logo.png"),
    },
    {
      url: "https://github.com/malek0x00/TMN-Website-1",
      name: "Tunisian Modern Newspaper",
      description:
        'Development of the front-end for the "Tunisian Modern Newspaper" website to display news, blogs and podcasts',
      technologies: "ReactJs",
      image: require("../../../public/tmn.png"),
    },
    {
      url: "https://github.com/malek0x00/handyman",
      name: "Handyman",
      description:
        "A mobile app that helps people find and contact workers near them",
      technologies: "React Native, expo, supabase",
      image: require("../../../public/handyman.png"),
      nopadding: true,
    },
    {
      url: "https://github.com/malek0x00/config_generator",
      name: "Config Generator",
      description:
        "Config Generator is a tool that helps with generating config files like dockerfiles and bash scripts with dynamic inputs",
      technologies: "NextJS, tailwind CSS",
      image: require("../../../public/docker.png"),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center items-center">
      {projectsData.map((project, index) => (
        <ProjCard
          key={index}
          url={project.url}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          image={project.image}
          nopadding={project.nopadding}
        />
      ))}
      <GithubCard />
    </div>
  );
}

export default ProjectsGrid;
