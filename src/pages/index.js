import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from '@/components/homepage'
import Sidebar from '@/components/sidebar'
import About from '@/components/about'
import Projects from '@/components/projects'
import ContactMe from '@/components/contact'
import { useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const projectsref = useRef(null)
  const homeref = useRef(null)
  const contactref = useRef(null)
  const aboutref = useRef(null)
  return (
    <div className='flex flex-row scroll-smooth' >
      {/* start sidebar */}
      <div className='fixed h-screen bg-lime-500 md:w-32 w-16'>
        <Sidebar homeref={homeref} aboutref={aboutref} contactref={contactref} projectsref={projectsref} />
      </div>
      {/* end sidebar */}
      {/* start scrollable area */}
      <div className='flex md:ml-32 ml-16 flex-grow flex-col '>
        <HomePage propref={homeref} contactref={contactref} />
        <About propref={aboutref} />
        <Projects propref={projectsref} />
        <ContactMe  propref={contactref} />
      </div>
      {/* end scrollable area */}
    </div>
  )
}
