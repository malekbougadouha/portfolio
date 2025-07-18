import Image from "next/image";

function Sidebar({ homeref, aboutref, projectsref, contactref }) {
  return (
    <div className="w-full h-full flex flex-col justify-center z-50">
      <SidebarButton propref={homeref} name="Home" />
      <SidebarButton propref={aboutref} name="About" />
      <SidebarButton propref={projectsref} name="Projects" />
      <SidebarButton propref={contactref} name="Contact" />
    </div>
  );
}

function SidebarButton({ name, propref }) {
  return (
    <div className="w-full h-32 flex items-center group justify-center">
      <p
        onClick={() => {
          propref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        className="clickableitem text-sm md:text-base group-hover:text-[#121212]/70 transition-colors cursor-pointer rotate-[270deg] font-semibold text-[#121212]"
      >
        {name}
      </p>
    </div>
  );
}

export default Sidebar;
