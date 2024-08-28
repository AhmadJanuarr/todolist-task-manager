import { useDarkModeStore } from "../../../stores/darkModeStore";
import {
  useSelectedStore,
  useTasksStore,
  useFilteredStore,
} from "../../../stores/taskStore";

export default function DesktopComponent() {
  const [tasks, updateTask] = useTasksStore((state) => [state.tasks, state.updateTask]);
  const [selectedId, toggleSelected] = useSelectedStore((state) => [
    state.selectedId,
    state.toggleSelected,
  ]);
  const [filtered] = useFilteredStore((state) => [
    state.filtered,
    state.filteredName,
  ]);
  const [isDarkMode] = useDarkModeStore((state) => [state.isDarkMode]);


  const handleStatusChange = (id: number, newStatus: string) => {
    updateTask(id, { status: newStatus });
  };

  let filteredTasks;
  if (filtered === "All Tasks") {
    filteredTasks = tasks;
  } else {
    filteredTasks = tasks.filter((task) =>
      task.status.toLowerCase().includes(filtered.toLowerCase())
    );
  }
  if (filteredTasks.length === 0) {
    return (
      <div className="flex justify-center items-center text-gray-500 h-full" >
        Tidak ada task dengan status "{filtered}"
      </div>
    );
  }
  const listItem = filteredTasks.map((task) => {
    const { id, title, deadline, status } = task;

    const truncatedTaskName =
      title.length > 20 ? title.substring(0, 20) + "..." : title;

    const className = "p-1  rounded-xl";
    const statusClassName =
      status === "In Progress"
        ? `p-1 bg-blue text-zinc-600 border-none ${className}`
        : status === "Not Progress"
          ? `bg-gray text-zinc-600 border-none ${className}`
          : `bg-green text-zinc-600 border-none ${className}`;


    const isSelected = selectedId.includes(id);
    const selectedBgColor = isSelected ? "bg-[#76ABAE] text-white" : "bg-transparent";

    return (
      <tr
        key={id}
        className={`text-[14px] py-2 ${isSelected ? selectedBgColor : ""} ${isDarkMode ? "hover:bg-[#76ABAE] hover:text-white" : "hover:bg-gray-200 "
          }`}
      >
        <td className="px-2 py-2 text-gray" width="5%">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => toggleSelected(id)}
          />
        </td>
        <td width="50%" className="py-2">
          {truncatedTaskName}
        </td>
        <td width="20%" className="py-2">
          {deadline}
        </td>
        <td width="25%" className="text-center">
          <select
            className={statusClassName}
            value={status}
            onChange={(e) => handleStatusChange(id, e.target.value)}
          >
            <option value="Not Progress">Not Progress</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </td>
      </tr>
    );
  });
  return (
    <div className="hidden laptop:block">
      <table className="w-full text-xl text-left border-collapse ">
        <thead
          className={`${isDarkMode ? " text-white bg-dark" : "bg-white"}`}
          style={{ position: "sticky", top: 0, zIndex: 1 }}
        >
          <tr className="text-[16px]">
            <th style={{ width: "5%" }} className="px-2"></th>
            <th style={{ width: "40%" }}>Task Name</th>
            <th style={{ width: "20%" }}>Deadline</th>
            <th style={{ width: "30%", textAlign: "center" }}>Status</th>
          </tr>
        </thead>
        <tbody>{listItem}</tbody>
      </table>
    </div>
  );
}