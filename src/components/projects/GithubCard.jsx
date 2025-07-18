import Image from "next/image";

function GithubCard() {
  return (
    <div className="w-60 h-60 bg-white relative group">
      <div className="absolute transition-all p-4 h-full w-full flex items-center group-hover:blur-md">
        <Image
          width={240}
          height="240"
          alt="logo"
          src={require("../../../public/github-mark.png")}
          className="transition-all"
        ></Image>
      </div>
      <div className=" opacity-0 group-hover:opacity-100 p-4 w-full h-full absolute transition-all">
        <p className="text-black text-sm font-semibold mb-2">Github</p>
        <p className="text-black font-light text-xs mb-2">
          Check my github for more projects
        </p>

        <button
          onClick={() => {
            window.open("https://github.com/malek0x00", "_blank");
          }}
          className="text-white text-xs font-light px-4 py-2 absolute bottom-4 right-4 bg-[#121212] "
        >
          Github profile
        </button>
      </div>
    </div>
  );
}

export default GithubCard;
