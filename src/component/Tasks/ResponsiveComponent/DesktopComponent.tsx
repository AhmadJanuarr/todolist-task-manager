import { useTasksStore } from "../../../stores/taskStore";

export default function DesktopComponent() {

  const [tasks] = useTasksStore((state) => [state.tasks]);
  const listItem = tasks.map((task) => {
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
          // checked={ }
          // onChange={ }
          />
        </td>
        <td width="55%" className="py-2">
          {truncatedTaskName}
        </td>
        <td width="20%" className="py-2">
          {deadline}
        </td>
        <td width="20%">
          <button className={statusClassName}>● {status}</button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ maxHeight: "20em" }}>
      <table className="w-full text-xl text-left border-collapse ">
        <thead
          className="bg-white text-zinc-600"
          style={{ position: "sticky", top: 0, zIndex: 1 }}
        >
          <tr>
            <th style={{ width: '5%' }} className="px-2"></th>
            <th style={{ width: '55%' }}>Task Name</th>
            <th style={{ width: '20%' }}>Deadline</th>
            <th style={{ width: '20%' }}>Status</th>
          </tr>
        </thead>
        <tbody>{listItem}</tbody>
      </table>
    </div>
  );
}
