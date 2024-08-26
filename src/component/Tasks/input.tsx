import { InputTypes } from "../../types/inputTypes";

export default function Input({
  type,
  name,
  id,
  htmlFor,
  placeholder,
  label,
  value,
  onChange,
}: InputTypes) {
  if (type === "select") {
    return (
      <div className="flex justify-between w-full gap-3 px-3 py-2">
        <label htmlFor={htmlFor} className="text-md">
          {label}
        </label>
        <select
          name={name}
          id={id}
          className="px-2 py-1 border rounded text-md"
          value={value}
          onChange={onChange}
          required
        >
          <option value="">
            Select status...
          </option>
          <option value="In Progress">In Progress</option>
          <option value="Not Progress">Not Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full  px-3 py-2">
      <label htmlFor={htmlFor} className="text-md">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-1 py-1 border rounded text-md"
      />
    </div>
  );
}
