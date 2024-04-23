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
    danger: "bg-red-400 text-black",
    disabled: "opacity-50 cursor-not-allowed",
  };
  // TODO: remove icon style now that there's a separate component
  return (
    <button
      className={`${style !== "icon" ? buttonStyles.border : ""} ${
        !disabled && buttonStyles.shadowAnim
      } h-full ${
        size === "header"
          ? "min-w-[28pt] min-h-[28pt]"
          : "min-w-[20pt] min-h-[20pt]"
      } lg:min-h-0 rounded-lg ${style !== "icon" ? "px-2 py-1" : ""} ${
        style === "primary" && buttonStyles.primary
      } ${style === "danger" && buttonStyles.danger}${
        disabled ? buttonStyles.disabled : ""
      } font-bold ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <p className="flex justify-center items-center w-full h-full">
        {children}
      </p>
    </button>
  );
};

export default Button;
