export default function Input({
  type,
  name,
  id,
  htmlFor,
  placeholder,
  label,
  value,
  onChange,
}) {
  if (type === "select") {
    return (
      <div className="flex justify-between w-full gap-3 px-3 py-2">
        <label htmlFor={htmlFor} className="text-lg ">
          {" "}
          {label}
        </label>
        <select
          name={name}
          id={id}
          className="w-1/2 px-3 py-1 border rounded"
          value={value}
          onChange={onChange}
          required
        >
          <option value="" disabled>
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
    <div className="flex justify-between w-full gap-3 px-3 py-2">
      <label htmlFor={htmlFor} className="text-lg ">
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
        className="w-1/2 px-3 py-1 border rounded"
      />
    </div>
  );
}
