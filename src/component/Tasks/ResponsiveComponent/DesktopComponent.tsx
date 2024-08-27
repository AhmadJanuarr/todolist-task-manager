import {
  useSelectedStore,
  useTasksStore,
  useFilteredStore,
} from "../../../stores/taskStore";

export default function DesktopComponent() {
  const [tasks] = useTasksStore((state) => [state.tasks]);
  const [selectedId, toggleSelected] = useSelectedStore((state) => [
    state.selectedId,
    state.toggleSelected,
  ]);
  const [filtered] = useFilteredStore((state) => [
    state.filtered,
    state.filteredName,
  ]);

  let filteredTasks;
  if (filtered === "All Tasks") {
    filteredTasks = tasks;
  } else {
    filteredTasks = tasks.filter((task) =>
      task.status.toLowerCase().includes(filtered.toLowerCase())
    );
  }

  const listItem = filteredTasks.map((task) => {
    const { id, title, deadline, status } = task;

    const truncatedTaskName =
      title.length > 20 ? title.substring(0, 20) + "..." : title;

    const className = "px-3 text-center rounded-xl";
    const statusClassName =
      status === "In Progress"
        ? `bg-blue text-zinc-600 border-none ${className}`
        : status === "Not Progress"
          ? `bg-gray text-zinc-600 border-none ${className}`
          : `bg-green text-zinc-600 border-none ${className}`;

    return (
      <tr key={id} className="hover:bg-grayDark text-[14px] py-2">
        <td className="px-2 py-2 text-gray" width="5%">
          <input
            type="checkbox"
            checked={selectedId.includes(id)}
            onChange={() => toggleSelected(id)}
          />
        </td>
        <td width="50%" className="py-2">
          {truncatedTaskName}
        </td>
        <td width="20%" className="py-2">
          {deadline}
        </td>
        <td width="25%">
          <button className={statusClassName}>● {status}</button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table className="w-full text-xl text-left border-collapse ">
        <thead
          className="bg-white text-zinc-600"
          style={{ position: "sticky", top: 0, zIndex: 1 }}
        >
          <tr className="text-[16px]">
            <th style={{ width: "5%" }} className="px-2"></th>
            <th style={{ width: "40%" }}>Task Name</th>
            <th style={{ width: "20%" }}>Deadline</th>
            <th style={{ width: "30%" }}>Status</th>
          </tr>
        </thead>
        <tbody>{listItem}</tbody>
      </table>
    </div>
  );
}
