export default function MobileComponent({
  selectedTasksById,
  setSelectedTasksById,
  tasks,
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

    return (
      <table
        className="w-full mb-5 text-left border border-gray-300 rounded text-md bg-grayDark"
        style={{ borderSpacing: "10px", borderCollapse: "separate" }} // Menambahkan jarak antar sel
        key={id}
      >
        <tr>
          <td className="px-2 text-gray " width={"5%"} rowSpan={4}>
            <input
              type="checkbox"
              checked={selectedTasksById.includes(id)}
              onChange={() => handleCheckBoxChange(id)}
            />
          </td>
        </tr>
        <tr className="text-[12px] ">
          <th className="text-gray">Task Name</th>
          <td width={"70%"}>{taskName}</td>
        </tr>

        <tr className=" text-[12px] ">
          <th className="text-gray">Deadline</th>
          <td>{deadline}</td>
        </tr>

        <tr className="text-[12px] ">
          <th className="text-gray">Status</th>
          <td>{status}</td>
        </tr>
      </table>
    );
  });

  return <div> {listItem}</div>;
}
