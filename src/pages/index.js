import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from '@/components/homepage'
import Sidebar from '@/components/sidebar'
import About from '@/components/about'
import Projects from '@/components/projects'
import ContactMe from '@/components/contact'
import { useRef } from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
   
  console.log("chay, mafama chy 😢😢")
  console.log("7atta el easter egg mazelt ma implementit'hech ")
  console.log("ye5i msayab kol chy w jey lel console enti ??????")
  const projectsref = useRef(null)
  const homeref = useRef(null)
  const contactref = useRef(null)
  const aboutref = useRef(null)
  return (
    <div className='flex flex-row scroll-smooth' >
      <Head>
      <meta name="google-site-verification" content="Ipm3WPrFlQ97i6K0KGTSrvK9qnOGIVQtabYN9d3RfsY" />
      </Head>
      <DefaultSeo
        title='Portfolio - Malek Bougadouha'
        titleTemplate="Portfolio - Malek Bougadouha"
        openGraph={{
          type: "website",
          url: "https://malekbougadouha.vercel.app/",
          description:
            "The personal website for Malek Bougadouha, a web and mobile developer.",
          site_name: "Malek Bougadouha - Portfolio",            
          }}
          robotsProps={{
            nosnippet: true,
            notranslate: true,
            noimageindex: true,
            noarchive: true,
            maxSnippet: -1,
            maxImagePreview: 'none',
            maxVideoPreview: -1,
          }}
        
            />
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
