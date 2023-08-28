import Image from "next/image";

function Sidebar({homeref, aboutref,projectsref,contactref}) {
    return ( 
        <div className="w-full h-full flex flex-col justify-center z-50">
            <SidebarButton propref={homeref}  name="Home" />
            <SidebarButton propref={aboutref}  name="About" />
            <SidebarButton propref={projectsref} name="Projects" />
            <SidebarButton propref={contactref}  name="Contact" />
        </div>
     );
}

function SidebarButton({name, propref}){
    return(
        <div className="w-full h-32 flex items-center justify-center">
            <p onClick={()=>{propref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}} className="clickableitem text-sm md:text-base rotate-[270deg] font-light text-[#121212]">{name}</p>
        </div>
    );
}

export default Sidebar;