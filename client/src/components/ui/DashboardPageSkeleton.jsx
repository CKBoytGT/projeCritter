const DashboardPageSkeleton = () => {
  return (
    <div className="animate-pulse">
      <span className="sr-only">Loading dashboard...</span>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
        <div className="h-8 bg-indigo-100 rounded-full w-36 mb-2 sm:mb-0"></div>
        <div className="h-9 w-32 bg-indigo-100 rounded-lg"></div>
      </div>
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-2 rounded-full h-8 w-36 bg-indigo-100"></div>
        <div className="flex flex-col gap-4">
          <div className="rounded-xl h-24 bg-indigo-100"></div>
          <div className="rounded-xl h-24 bg-indigo-100"></div>
          <div className="rounded-xl h-24 bg-indigo-100"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageSkeleton;
