function About({ propref }) {
  return (
    <div
      ref={propref}
      className="w-full h-auto md:pl-12 pl-6 flex pt-6 text flex-col"
    >
      <p className="md:text-6xl text-3xl font-black text-stroke-1 text-[#121212]">
        About Me
      </p>
      {/* start cards list */}
      <div className="flex flex-col -ml-6 md:flex-row gap-8 items-center md:items-start py-6 justify-center">
        <AboutCard title="Education">
          <TimelineCardContent
            hasNext
            fromyear={2021}
            toyear={2024}
            name="Polytechnic School of Sousse"
            degree="software engineering degree"
          />
          <TimelineCardContent
            fromyear={2018}
            toyear={2021}
            name="Higher School of Science and Technology of Hammam Sousse"
            degree="Bachelor degree in science and technology of information and communication"
          />
        </AboutCard>
        <AboutCard title="Experience">
          <TimelineCardContent
            hasNext
            fromyear="Jun '25"
            toyear="Now"
            name="Tactix Solutions"
            isCurrently
            degree="Web Developer"
          />
          <TimelineCardContent
            hasNext
            fromyear="Oct '24"
            toyear="Mar '25"
            name="Creo"
            degree="Web Developer"
          />
          <TimelineCardContent
            hasNext
            fromyear="Feb '24"
            toyear="Jun '24"
            name="Envast"
            degree="Web & Mobile Development Internship"
          />
          <TimelineCardContent
            hasNext
            fromyear="Jun '23"
            toyear="Sep '23"
            name="Envast"
            degree="Mobile Development Internship"
          />
          <TimelineCardContent
            hasNext
            fromyear="Oct '22"
            toyear="Jan '23"
            name="Enterprise eSolutions"
            degree="Web Development part-time job"
          />
          <TimelineCardContent
            hasNext
            fromyear="Jul '22"
            toyear="Aug '22"
            name="Enterprise eSolutions"
            degree="Web Development Internship"
          />
          <TimelineCardContent
            fromyear="Feb '22"
            toyear="May '22"
            name="Tunisian Modern Newspaper"
            degree="Web Development Internship"
          />
          {/* <TimelineCardContent fromyear="Jan '21" toyear="Jun '21" name="AfiaTech" degree="Software Development Internship" /> */}
        </AboutCard>
        <AboutCard title="Skills">
          <div className="w-full h-full px-2 pt-4 ">
            <p className="text-base font-bold">Frameworks & Libraries</p>
            <div className="ml-4 flex gap-2 flex-col mt-2">
              <li className="text-sm font-light">ReactJS</li>
              <li className="text-sm font-light">NextJS</li>
              <li className="text-sm font-light">Redux / Redux Sagas</li>
              <li className="text-sm font-light">Tailwind CSS</li>
              <li className="text-sm font-light">React Native</li>
              <li className="text-sm font-light">expo</li>
              <li className="text-sm font-light">NodeJS</li>
              <li className="text-sm font-light">Socket.IO</li>
              <li className="text-sm font-light">express</li>
              <li className="text-sm font-light">NestJS</li>
              <li className="text-sm font-light">prisma ORM</li>
            </div>
            <p className="text-base font-bold mt-4">DBMS</p>
            <div className="ml-4 flex gap-2 flex-col mt-2">
              <li className="text-sm font-light">MongoDB</li>
              <li className="text-sm font-light">MySQL</li>
            </div>
          </div>
        </AboutCard>
      </div>
    </div>
  );
}

function AboutCard({ title, children }) {
  return (
    <div className="w-70">
      <p className="text-lime-400 font-light text-sm">{title}</p>
      <div className="bg-[#1e1e1e] w-72 mt-2 pb-4 px-4">{children}</div>
    </div>
  );
}

function TimelineCardContent({
  hasNext = false,
  fromyear,
  toyear,
  name,
  degree,
  isCurrently = false,
}) {
  return (
    <div className="w-full pt-4">
      <div className="w-1/2 h-6 bg-lime-500 rounded-full flex items-center justify-center">
        {isCurrently ? (
          <p className="text-[#1e1e1e] font-semibold text-xs">Currently</p>
        ) : (
          <p className="text-[#1e1e1e] font-semibold text-xs">
            {fromyear} - {toyear}
          </p>
        )}
      </div>
      <div className="flex flex-col my-4 gap-4 justify-between">
        <p className="text-base font-bold">{degree}</p>
        <p className="text-sm font-light">{name}</p>
      </div>

      {hasNext && (
        <div className="w-full border-b-[1px] border-dashed mt-6 border-stone-600" />
      )}
    </div>
  );
}

export default About;
