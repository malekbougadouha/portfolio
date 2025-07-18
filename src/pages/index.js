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
  console.log("👀 bombastic side-eye \n version 25.7.18");

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
        description="Hi, I'm Malek Bougadouha! Welcome to my portfolio—here you'll find my work, my story, and what drives me. I love building creative digital experiences and tackling real-world challenges."
        openGraph={{
          type: "website",
          url: "https://malekbougadouha.vercel.app/",
          description:
            "Hey, I'm Malek Bougadouha. Check out my personal portfolio to see my projects, my skills, and how I approach solving problems with code.",
          site_name: "Malek Bougadouha - Personal Portfolio",
          images: [
            {
              url: "https://malekbougadouha.vercel.app/og_image.png",
              width: 1200,
              height: 630,
              alt: "Portfolio Open Graph Image",
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
      <div className="fixed h-full bg-lime-500 w-16 lg:w-32 ">
        <Sidebar
          homeref={homeref}
          aboutref={aboutref}
          contactref={contactref}
          projectsref={projectsref}
        />
      </div>
      {/* end sidebar */}
      {/* start scrollable area */}
      <div className="flex lg:ml-32 ml-16 flex-grow flex-col ">
        <HomePage propref={homeref} contactref={contactref} />
        <About propref={aboutref} />
        <Projects propref={projectsref} />
        <ContactMe propref={contactref} />
      </div>
      {/* end scrollable area */}
    </div>
  );
}
