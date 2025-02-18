import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "@/components/homepage";
import Sidebar from "@/components/sidebar";
import About from "@/components/about";
import Projects from "@/components/projects";
import ContactMe from "@/components/contact";
import { useRef } from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("👀 bombastic side-eye \n version 25.2.18");

  const projectsref = useRef(null);
  const homeref = useRef(null);
  const contactref = useRef(null);
  const aboutref = useRef(null);
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: true,
  });
  return (
    <div className="flex flex-row scroll-smooth">
      <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color="205, 205, 205"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[".clickableitem", "button"]}
      />
      <Head>
        <meta
          name="google-site-verification"
          content="Ipm3WPrFlQ97i6K0KGTSrvK9qnOGIVQtabYN9d3RfsY"
        />
      </Head>
      <DefaultSeo
        title="Portfolio - Malek Bougadouha"
        titleTemplate="Portfolio - Malek Bougadouha"
        openGraph={{
          type: "website",
          url: "https://malekbougadouha.vercel.app/",
          description:
            "My portfolio website, built with Next.js and TailwindCSS",
          site_name: "Malek Bougadouha - Personal Portfolio",
          images: [
            {
              url: "https://malekbougadouha.vercel.app/logo_dark.png",
              width: 512,
              height: 512,
              alt: "Logo",
            },
          ],
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
      />
      {/* start sidebar */}
      <div className="fixed h-screen bg-lime-500 md:w-32 w-16">
        <Sidebar
          homeref={homeref}
          aboutref={aboutref}
          contactref={contactref}
          projectsref={projectsref}
        />
      </div>
      {/* end sidebar */}
      {/* start scrollable area */}
      <div className="flex md:ml-32 ml-16 flex-grow flex-col ">
        <HomePage propref={homeref} contactref={contactref} />
        <About propref={aboutref} />
        <Projects propref={projectsref} />
        <ContactMe propref={contactref} />
      </div>
      {/* end scrollable area */}
    </div>
  );
}
