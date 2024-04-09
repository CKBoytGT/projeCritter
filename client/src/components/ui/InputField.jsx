const InputField = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  warning,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold">
        {label}
      </label>
      <input
        className={`block w-full border-2 ${
          warning ? "border-red-800" : "border-black"
        } rounded-md px-2 py-1 focus:ring-4 focus:ring-sky-500`}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></input>
      <p className="text-xs text-right text-red-800">{warning}</p>
    </div>
  );
};

export default InputField;
