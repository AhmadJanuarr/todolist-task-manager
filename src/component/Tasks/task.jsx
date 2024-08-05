export default function Task() {
  return (
    <table className="w-full text-xl text-left border">
      <thead>
        <tr>
          <th width="60%" colSpan={2}>
            Task Name
          </th>
          <th>Deadline</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>{/* Tasl row */}</tbody>
    </table>
  );
}
