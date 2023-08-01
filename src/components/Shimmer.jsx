const Shimmer = () => {
  return (
    <div className="mt-24 flex flex-wrap items-center justify-cente gap-2">
      {Array(24)
        .fill("")
        .map((e) => {
          return (
            <div className="relative rounded-md h-[273px] w-[273px] bg-gray-200">
              <div className="absolute bottom-8 left-2 w-[200px] h-[16px] bg-gray-100 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-[140px] h-[12px] bg-gray-100 rounded-full"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
