import {HiOutlineMail, HiOutlinePhone} from 'react-icons/hi'
import {BsLinkedin,BsGithub} from 'react-icons/bs'

function ContactMe({propref}) {
    return ( 
        <div  ref={propref} className="w-full h-screen md:pl-12 mb-8 px-6 flex pt-6 text flex-col">
            <p className="md:text-6xl text-3xl font-black text-stroke-1 my-4 text-[#121212]">Contact Me</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-center items-start md:items-center">
                <div className="flex gap-4 flex-col">
                    <InfoItem link="mailto:bougadouha.malek@gmail.com" icon={<HiOutlineMail size={26} color="#84cc16" />} text="bougadouha.malek@gmail.com" />
                    <InfoItem link="tel:+21628064787" icon={<HiOutlinePhone size={26} color="#84cc16" />} text="+216 28 064 787" />
                    
                </div>
                <div className="flex gap-4 flex-col">
                    <InfoItem link="https://www.linkedin.com/in/malek-bougadouha/" icon={<BsLinkedin size={26} color="#84cc16" />} text="malek-bougadouha" />
                    <InfoItem link="https://github.com/malek0x00/" icon={<BsGithub size={26} color="#84cc16" />} text="malek0x00" />
                </div>
                
            </div>

        </div>
     );
}

function InfoItem({icon, text, link}){
    return(
        <div onClick={()=>{window.open(link,"_blank")}} className="clickableitem w-70 h-16 flex flex-row items-center justify-start  transition-all p-2 hover:scale-105">
            <div className="w-12 h-12 mr-2 bg-lime-100 rounded-full flex items-center justify-center">{icon}</div>
            <p className="text-xs font-semibold">{text}</p>
        </div>
    );
}

export default ContactMe;