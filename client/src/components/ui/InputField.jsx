const InputField = ({
  label,
  id,
  name,
  type = "text",
  autoComplete = "on",
  inputType = "input",
  value,
  onChange,
  onBlur,
  warning,
  note,
  children,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold">
        {label}
      </label>
      {inputType === "input" && (
        <input
          className={`block w-full border-2 ${
            warning ? "border-red-800" : "border-black"
          } rounded-md px-2 py-1 font-medium focus:ring-4 focus:ring-emerald-300`}
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        ></input>
      )}
      {inputType === "select" && (
        <select
          className={`block w-full border-2 ${
            warning ? "border-red-800" : "border-black"
          } rounded-md px-2 py-1 font-medium focus:ring-4 focus:ring-emerald-300`}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          {children}
        </select>
      )}
      {note && <p className="text-right text-xs">{note}</p>}
      {warning && <p className="text-right text-xs text-red-800">{warning}</p>}
    </div>
  );
};

export default InputField;
