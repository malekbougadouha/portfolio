import Image from "next/image";

function ProjCard({
  name,
  description,
  technologies,
  image,
  nopadding = false,
  url,
}) {
  function handleClick() {
    window.open(url, "_blank");
  }

  return (
    <div className="w-60 h-60 bg-white relative group">
      <div
        className={`absolute transition-all ${
          nopadding ? "p-0" : "p-4"
        } h-full w-full flex items-center group-hover:blur-md`}
      >
        <Image
          width={240}
          height="240"
          alt="logo"
          src={image}
          className="transition-all"
        ></Image>
      </div>
      <div className=" opacity-0 group-hover:opacity-100 p-4 w-full h-full absolute transition-all">
        <p className="text-black text-sm font-semibold mb-2">{name}</p>
        <p className="text-black font-light text-xs mb-2">{description}</p>

        <p className="text-black text-sm font-semibold">technologies: </p>
        <p className="text-black font-light text-xs mb-2">{technologies}</p>

        <button
          onClick={() => {
            if (url != "#") handleClick();
          }}
          disabled={url == "#"}
          className="text-white text-xs font-light px-4 py-2 absolute bottom-4 right-4 bg-[#121212] "
        >
          see project
        </button>
      </div>
    </div>
  );
}

export default ProjCard;
