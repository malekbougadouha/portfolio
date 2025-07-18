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

export default TimelineCardContent;
