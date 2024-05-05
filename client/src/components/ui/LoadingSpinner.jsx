const LoadingSpinner = ({ style }) => {
  // TODO: custom spinner + colors
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className={`w-8 h-8 ${
          style === "dark" ? "text-white/50" : "text-emerald-200"
        } animate-spin ${style === "dark" ? "fill-white" : "fill-emerald-400"}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12,12-5.38,12-12S18.62,0,12,0ZM12,19c-3.86,0-7-3.14-7-7s3.14-7,7-7,7,3.14,7,7-3.14,7-7,7Z"
          fill="currentColor"
        />
        <path
          d="M10.43.13h-.02c-.15,0-.3.02-.45.04C4.99,1.02,1.04,4.93.16,9.9c-.3,1.35.58,2.74,1.97,3.05.06.01.12.03.19.03h.03s.03,0,.03,0c.08,0,.16.01.24.01,1.25,0,2.32-.93,2.49-2.17.49-2.97,2.83-5.29,5.82-5.76,1.17-.16,2.07-1.18,2.08-2.38-.01-1.42-1.16-2.56-2.57-2.56Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
