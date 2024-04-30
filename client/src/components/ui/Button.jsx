// CUSTOM PROPS
// style - controls visual styling
// --- "primary" - (default) light green button with black border and shadow animation
// --- "danger" - same as primary, but red
// --- "icon" - uses only the child icon with no additional background, border, etc.
// touchTargetSize - controls the minimum size for a button on mobile
// --- (see https://www.smashingmagazine.com/2023/04/accessible-tap-target-sizes-rage-taps-clicks/)
// --- "large" - for buttons at the very top or very bottom of the screen
// --- "medium" - for buttons near the top or bottom of the screen
// --- "small" - (default) for buttons near the middle of the screen

const Button = ({
  style = "primary",
  touchTargetSize = "small",
  type = "button",
  onClick,
  disabled = false,
  className,
  children,
}) => {
  const buttonStyles = {
    shadowAnim: "active:shadow-none active:translate-x-0 active:translate-y-0",
    iconAnim: "active:translate-x-[0.1rem] active:translate-y-[0.1rem]",
    primary:
      "bg-emerald-200 text-black shadow-[0.2rem_0.2rem_black] border-2 border-black translate-x-[-0.25rem] translate-y-[-0.25rem]",
    danger:
      "bg-red-400 text-black shadow-[0.2rem_0.2rem_black] border-2 border-black translate-x-[-0.25rem] translate-y-[-0.25rem]",
    disabled: "opacity-50 cursor-none",
  };

  return (
    <button
      className={`${
        touchTargetSize === "large"
          ? "min-h-[31pt] min-w-[31pt]"
          : touchTargetSize === "medium"
          ? "min-w-[28pt] min-h-[28pt]"
          : "min-w-[20pt] min-h-[20pt]" // small (default)
      } md:min-w-0 md:min-h-0 rounded-lg ${style !== "icon" && "px-2 py-1"} ${
        style === "primary" && buttonStyles.primary
      } ${style === "danger" && buttonStyles.danger} ${
        disabled && buttonStyles.disabled
      } ${
        !disabled
          ? style === "icon"
            ? buttonStyles.iconAnim
            : buttonStyles.shadowAnim
          : ""
      } font-bold ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <p className="flex justify-center items-center">{children}</p>
    </button>
  );
};

export default Button;
