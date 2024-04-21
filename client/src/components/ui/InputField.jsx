const InputField = ({
  label,
  id,
  name,
  type = "text",
  inputType = "input",
  value,
  defaultValue,
  onChange,
  onBlur,
  warning,
  note,
  children,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold">
        {label}
      </label>
      {inputType === "input" && (
        <input
          className={`block w-full border-2 ${
            warning ? "border-red-800" : "border-black"
          } rounded-md px-2 py-1 focus:ring-4 focus:ring-emerald-300`}
          id={id}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
        ></input>
      )}
      {inputType === "select" && (
        <select
          className={`block w-full border-2 ${
            warning ? "border-red-800" : "border-black"
          } rounded-md px-2 py-1 focus:ring-4 focus:ring-emerald-300`}
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
        >
          {children}
        </select>
      )}
      {note && <p className="text-xs text-right">{note}</p>}
      {warning && <p className="text-xs text-right text-red-800">{warning}</p>}
    </div>
  );
};

export default InputField;
