import { useEffect } from "react";
import { useState } from "react";
export default function Task({ tasks }) {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("tasks"));
    if (items) setItems(items);
  }, []);

  const handleCheckBoxChange = (taskId) => {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };

  const listItem = items.map((index, items) => {
    const { id, task: taskName, deadline, status } = items;
    const truncatedTaskName =
      taskName.length > 20 ? taskName.substring(0, 20) + "..." : taskName;
    return (
      <tr key={index} className="border-b text-[16px]">
        <td className="px-5 pl-5" width={"5%"}>
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

  return (
    <table className="w-full text-xl text-left ">
      <thead>
        <tr className="text-lg text-gray">
          <th width="60%" colSpan={2}>
            Task Name
          </th>
          <th>Deadline</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{listItem}</tbody>
    </table>
  );
}
