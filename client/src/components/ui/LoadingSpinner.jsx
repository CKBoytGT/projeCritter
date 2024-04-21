const LoadingSpinner = ({ style }) => {
  // TODO: custom spinner + colors
  return (
    <div
      role="status"
      className="flex justify-center items-center grow w-full h-full"
    >
      <svg
        aria-hidden="true"
        className={`w-8 h-8 ${
          style === "dark" ? "text-white" : "text-black"
        } animate-spin ${style === "dark" ? "fill-white" : "fill-black"}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity="0.5"
          fill="currentColor"
        />
        <path
          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
