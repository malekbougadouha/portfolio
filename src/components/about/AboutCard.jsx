function AboutCard({ title, children }) {
  return (
    <div className=" flex-shrink">
      <p className="text-lime-400 font-light pl-1 text-sm">{title}</p>
      <div className="bg-[#1e1e1e] ml-2 max-w-[278px] min-w-[268px] w-full mt-2 pb-4 px-4">
        {children}
      </div>
    </div>
  );
}

export default AboutCard;
