export default function MobileComponent({
  selectedTasksById,
  setSelectedTasksById,
  tasks,
  setTasks,
}) {
  const handleCheckBoxChange = (taskId) => {
    if (selectedTasksById.includes(taskId)) {
      setSelectedTasksById(selectedTasksById.filter((id) => id !== taskId));
    } else {
      setSelectedTasksById([...selectedTasksById, taskId]);
    }
  };

  const listItem = tasks.map((task) => {
    const { id, task: taskName, deadline, status } = task;

    const className = "px-2 text-center border rounded-xl";
    const statusClasName =
      status === "In Progress"
        ? `bg-blue text-zinc-600 border-none ${className}`
        : status === "Not Progress"
        ? `bg-gray text-zinc-600 border-none  ${className}`
        : `bg-green text-zinc-600 border-none ${className}`;

    return (
      <table
        className="w-full mb-5 text-left border-separate border-gray-300 rounded text-md bg-grayDark border-spacing-2"
        key={id}
      >
        <tbody>
          <tr>
            <td className="px-2 text-zinc-400" width={"5%"} rowSpan={4}>
              <input
                type="checkbox"
                checked={selectedTasksById.includes(id)}
                onChange={() => handleCheckBoxChange(id)}
              />
            </td>
          </tr>
          <tr className="text-[12px]">
            <th className="text-zinc-400">Task Name</th>
            <td width={"70%"}>{taskName}</td>
          </tr>

          <tr className=" text-[12px] ">
            <th className="text-zinc-400">Deadline</th>
            <td>{deadline}</td>
          </tr>

          <tr className="text-[12px]">
            <th className="text-zinc-400">Status</th>
            <td>
              <button className={statusClasName}>●{status}</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  });

  return <div> {listItem}</div>;
}
