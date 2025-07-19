function AboutCard({ title, children }) {
  return (
    <div className="w-72">
      <p className="text-lime-400 font-light text-sm">{title}</p>
      <div className="bg-[#1e1e1e] w-72 mt-2 pb-4 px-4">{children}</div>
    </div>
  );
}

export default AboutCard;
