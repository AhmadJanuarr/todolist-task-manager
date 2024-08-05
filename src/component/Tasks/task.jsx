import { useState } from "react";
export default function Task({ tasks }) {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleCheckBoxChange = (taskId) => {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };

  const listItem = tasks.map((task, index) => {
    return (
      <tr key={index} className="border-b ">
        <td className="py-5">
          <input
            type="checkbox"
            checked={selectedTasks.includes(task.id)}
            onChange={() => handleCheckBoxChange(task.id)}
          />
        </td>
        <td className="py-5">{task.task}</td>
        <td className="py-5">{task.deadline}</td>
        <td className="py-5">{task.status}</td>
      </tr>
    );
  });

  return (
    <table className="w-full text-xl text-left ">
      <thead>
        <tr>
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
