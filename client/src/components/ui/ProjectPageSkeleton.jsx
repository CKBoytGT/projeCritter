const ProjectPageSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col grow">
      <span className="sr-only">Loading project...</span>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-2 w-full">
        <div className="h-8 bg-indigo-100 rounded-full w-48 mb-2 sm:mb-0"></div>
        <div className="flex gap-4">
          <div className="h-9 w-32 bg-indigo-100 rounded-lg"></div>
          <div className="h-9 w-32 bg-indigo-100 rounded-lg"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-stretch md:grow gap-4 md:max-h-[36rem]">
        <div className="flex flex-col justify-between items-center md:basis-1/5 gap-4 border-4 border-indigo-100 w-full md:min-w-[210px] h-72 md:h-auto rounded-xl bg-indigo-100"></div>
        <div className="flex flex-col md:flex-row md:items-stretch md:basis-4/5 gap-4 w-full md:overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-100 scrollbar-track-transparent">
          <div className="flex flex-col rounded-xl border-4 border-indigo-100 w-full h-36 md:h-auto md:min-w-[210px] bg-indigo-100"></div>
          <div className="flex flex-col rounded-xl border-4 border-indigo-100 w-full h-36 md:h-auto md:min-w-[210px] bg-indigo-100"></div>
          <div className="flex flex-col rounded-xl border-4 border-indigo-100 w-full h-36 md:h-auto md:min-w-[210px] bg-indigo-100"></div>
          <div className="flex flex-col rounded-xl border-4 border-indigo-100 w-full h-36 md:h-auto md:min-w-[210px] bg-indigo-100"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageSkeleton;
