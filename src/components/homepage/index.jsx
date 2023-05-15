
function HomePage({propref, contactref}) {
    
    
    return ( 
        <>
        <div ref={propref} className="w-full h-screen md:pl-12 pl-6 flex justify-center text flex-col">
            <p className={`lg:text-7xl md:text-5xl text-3xl font-black text-stroke-1 text-[#121212]`}>Hi there,</p>
            <p className="lg:text-7xl md:text-5xl text-3xl font-black ">i{"'"}m Malek Bougadouha,</p>
            <p className="lg:text-7xl md:text-5xl text-3xl font-black text-stroke-1 text-[#121212]">a web developer.</p>
            <button onClick={()=>{contactref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}} className="lg:w-48 lg:h-16 md:w-40 md:h-14  w-36 h-12 lg:text-base text-sm text-lime-500 hover:bg-lime-500 hover:text-[#121212] transition-all active:scale-95 bg-[#121212] border-2 border-lime-500 mt-9 flex justify-center items-center">
                Contact Me
            </button>
        </div>
        
        </>
     );
}

export default HomePage;