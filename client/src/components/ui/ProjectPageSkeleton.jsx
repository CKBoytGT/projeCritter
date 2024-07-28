const ProjectPageSkeleton = () => {
  return (
    <div className="flex grow animate-pulse flex-col">
      <span className="sr-only">Loading project...</span>
      <div className="mb-2 flex w-full flex-col items-center justify-between sm:flex-row">
        <div className="mb-2 h-8 w-48 rounded-full bg-indigo-100 sm:mb-0"></div>
        <div className="flex gap-4">
          <div className="h-9 w-32 rounded-lg bg-indigo-100"></div>
          <div className="h-9 w-32 rounded-lg bg-indigo-100"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:max-h-[36rem] md:grow md:flex-row md:items-stretch">
        <div className="flex h-72 w-full flex-col items-center justify-between gap-4 rounded-xl border-4 border-indigo-100 bg-indigo-100 md:h-auto md:min-w-[210px] md:basis-1/5"></div>
        <div className="scrollbar-thin scrollbar-thumb-indigo-100 scrollbar-track-transparent flex w-full flex-col gap-4 md:basis-4/5 md:flex-row md:items-stretch md:overflow-x-auto">
          <div className="flex h-36 w-full flex-col rounded-xl border-4 border-indigo-100 bg-indigo-100 md:h-auto md:min-w-[210px]"></div>
          <div className="flex h-36 w-full flex-col rounded-xl border-4 border-indigo-100 bg-indigo-100 md:h-auto md:min-w-[210px]"></div>
          <div className="flex h-36 w-full flex-col rounded-xl border-4 border-indigo-100 bg-indigo-100 md:h-auto md:min-w-[210px]"></div>
          <div className="flex h-36 w-full flex-col rounded-xl border-4 border-indigo-100 bg-indigo-100 md:h-auto md:min-w-[210px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageSkeleton;
