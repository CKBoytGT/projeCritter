const Button = ({
  style = "primary",
  size = "main",
  type = "button",
  onClick,
  disabled = false,
  className,
  children,
}) => {
  const buttonStyles = {
    shadowAnim: "active:shadow-none active:translate-x-0 active:translate-y-0",
    border:
      "shadow-[0.2rem_0.2rem_black] border-2 border-black translate-x-[-0.25rem] translate-y-[-0.25rem]",
    primary: "bg-emerald-200 text-black",
    disabled: "opacity-50 cursor-not-allowed",
  };

  return (
    <button
      className={`${style !== "icon" ? buttonStyles.border : ""} ${
        !disabled && buttonStyles.shadowAnim
      } ${
        size === "header"
          ? "min-w-[28pt] min-h-[28pt]"
          : "min-w-[20pt] min-h-[20pt]"
      } lg:min-h-0 rounded-lg ${style !== "icon" ? "px-2 py-1" : ""} ${
        style === "primary" && buttonStyles.primary
      } ${
        disabled ? buttonStyles.disabled : ""
      } flex justify-center items-center font-bold ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
