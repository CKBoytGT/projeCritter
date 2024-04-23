const ButtonIconOnly = ({
  type = "button",
  touchTargetSize = "small",
  onClick,
  disabled = false,
  className,
  children,
}) => {
  return (
    <button
      className={`m-0 p-0 ${
        touchTargetSize === "medium"
          ? "min-h-[28pt] min-w-[28pt]"
          : touchTargetSize === "large"
          ? "min-h-[31pt] min-w-[31pt]"
          : "min-h-[20pt] min-w-[20pt]" // small (default)
      } md:min-h-0 md:min-w-0 ${
        disabled
          ? "opacity-50 cursor-none"
          : "active:translate-x-0.5 active:translate-y-0.5"
      } ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex justify-center items-center">{children}</div>
    </button>
  );
};

export default ButtonIconOnly;
