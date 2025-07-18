import ProjectsGrid from "./ProjectsGrid";

function Projects({ propref }) {
  return (
    <div
      ref={propref}
      className="w-full h-auto md:pl-12 px-6 flex pt-6 text flex-col"
    >
      <p className="md:text-6xl text-3xl font-black text-stroke-1 mb-4 text-[#121212]">
        My Projects
      </p>
      <ProjectsGrid />
    </div>
  );
}

export default Projects;
