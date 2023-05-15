import Image from "next/image";

function Projects({propref}) {
    return ( 
        <div ref={propref} className="w-full h-auto md:pl-12 px-6 flex pt-6 text flex-col">
            <p className="md:text-6xl text-3xl font-black text-stroke-1 mb-4 text-[#121212]">My Projects</p>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-4 justify-items-center items-center grid-cols-1">
                
                <ProjCard url="https://github.com/malek0x00/portfolio" name="This Portfolio" description="The source code for this portfolio, built and hosted on the vercel platform" technologies="NextJS, tailwind CSS" image={require("../../../public/vercel-logo.png")} />
                
                <ProjCard url="https://s7equityinvestors.ca/" name="S7equity Investors portal" description="Development of a mobile and web app for the investors of the real estate investment company S7equity." technologies="React Native, expo" image={require("../../../public/s7logo.png")} />

                <ProjCard url="https://github.com/malek0x00/TMN-Website-1" name="Tunisian Modern Newspaper" description="Development of the front-end for the “Tunisian Modern Newspaper” website to display news, blogs and podcasts" technologies="ReactJs" image={require("../../../public/tmn.png")} />
                
                <ProjCard url="https://github.com/malek0x00/handyman" name="Handyman" description="A mobile app that helps people find and contact workers near them" technologies="React Native, expo, supabase" image={require("../../../public/handyman.png")} nopadding/>
                
                <ProjCard url="https://github.com/malek0x00/config_generator" name="Config Generator" description="Config Generator is a tool that helps with generating config files like dockerfiles and bash scripts with dynamic inputs" technologies="NextJS, tailwind CSS" image={require("../../../public/docker.png")} />
                
                <GithubCard />
            </div>

        </div>
     );
}

function ProjCard({name,description,technologies,image, nopadding=false,url}){

    function handleClick(){
        window.open(url, "_blank");
    }
    
    return (
        <div className="w-60 h-60 bg-white relative group">
            <div className={`absolute transition-all ${nopadding?'p-0':'p-4'} h-full w-full flex items-center group-hover:blur-md`}>
                <Image width={240} height="240" alt="logo" src={image} className="transition-all"></Image>
            </div>
            <div className=" opacity-0 group-hover:opacity-100 p-4 w-full h-full absolute transition-all">
                <p className="text-black text-sm font-semibold mb-2">{name}</p>
                <p className="text-black font-light text-xs mb-2">{description}</p>
                
                <p className="text-black text-sm font-semibold">technologies: </p>
                <p className="text-black font-light text-xs mb-2">{technologies}</p>
                
                <button onClick={()=>{handleClick()}} className="text-white text-xs font-light px-4 py-2 absolute bottom-4 right-4 bg-[#121212] ">see project</button>
            </div>
            
        </div>
    );
}

function GithubCard(){
    return (
        <div className="w-60 h-60 bg-white relative group">
            <div className="absolute transition-all p-4 h-full w-full flex items-center group-hover:blur-md">
                <Image width={240} height="240" alt="logo" src={require("../../../public/github-mark.png")} className="transition-all"></Image>
            </div>
            <div className=" opacity-0 group-hover:opacity-100 p-4 w-full h-full absolute transition-all">
                <p className="text-black text-sm font-semibold mb-2">Github</p>
                <p className="text-black font-light text-xs mb-2">Check my github for more projects</p>
                
                <button onClick={()=>{window.open("https://github.com/malek0x00","_blank")}} className="text-white text-xs font-light px-4 py-2 absolute bottom-4 right-4 bg-[#121212] ">Github profile</button>
            </div>
            
        </div>
    );
}

export default Projects;