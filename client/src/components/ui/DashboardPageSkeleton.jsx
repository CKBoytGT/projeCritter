const DashboardPageSkeleton = () => {
  return (
    <div className="animate-pulse">
      <span className="sr-only">Loading dashboard...</span>
      <div className="mb-2 flex flex-col items-center justify-between sm:flex-row">
        <div className="mb-2 h-8 w-36 rounded-full bg-indigo-100 sm:mb-0"></div>
        <div className="h-9 w-32 rounded-lg bg-indigo-100"></div>
      </div>
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-2 h-8 w-36 rounded-full bg-indigo-100"></div>
        <div className="flex flex-col gap-4">
          <div className="h-24 rounded-xl bg-indigo-100"></div>
          <div className="h-24 rounded-xl bg-indigo-100"></div>
          <div className="h-24 rounded-xl bg-indigo-100"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageSkeleton;
