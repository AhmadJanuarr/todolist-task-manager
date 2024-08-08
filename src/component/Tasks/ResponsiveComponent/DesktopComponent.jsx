import { useState } from "react";

export default function DesktopComponent({ tasks }) {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleCheckBoxChange = (taskId) => {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };

  console.log(selectedTasks);

  const listItem = tasks.map((task) => {
    const { id, task: taskName, deadline, status } = task;
    const truncatedTaskName =
      taskName.length > 20 ? taskName.substring(0, 20) + "..." : taskName;
    return (
      <tr key={id} className="bg-grayDark text-[12px] ">
        <td className="px-2 text-gray" width={"5%"}>
          <input
            type="checkbox"
            checked={selectedTasks.includes(id)}
            onChange={() => handleCheckBoxChange(id)}
          />
        </td>
        <td className="py-5" width={"55%"}>
          {truncatedTaskName}
        </td>
        <td className="py-5" width={"20%"}>
          {deadline}
        </td>
        <td className="py-5" width={"20%"}>
          {status}
        </td>
      </tr>
    );
  });

  const responsiveLaptop = "laptop:flex laptop:flex-col laptop:block";
  return (
    <table className={`hidden w-full text-xl text-left ${responsiveLaptop}`}>
      <thead className="border">
        <tr className="laptop:text-[14px] text-gray flex">
          <th width="60%" colSpan={2}>
            Task Name
          </th>
          <th width="20%">Deadline</th>
          <th width="20%">Status</th>
        </tr>
      </thead>
      <tbody>{listItem}</tbody>
    </table>
  );
}
