const Button = ({
  style = "primary",
  type,
  onClick,
  disabled = false,
  className,
  children,
}) => {
  const buttonStyles = {
    primary: "bg-black hover:bg-neutral-800 text-white",
    nav: "border border-white bg-black hover:bg-neutral-800",
    disabled: "opacity-50 cursor-not-allowed",
  };

  return (
    <button
      className={`${
        style === "nav" ? "min-h-[28pt]" : "min-h-[20pt]"
      } lg:min-h-0 focus-visible:ring-4 focus-visible:ring-sky-500 rounded ${
        style !== "icon" ? "px-2 py-1" : ""
      } ${
        style === "primary"
          ? buttonStyles.primary
          : style === "nav"
          ? buttonStyles.nav
          : ""
      } ${disabled ? buttonStyles.disabled : ""} font-bold ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
