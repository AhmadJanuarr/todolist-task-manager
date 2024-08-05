export default function Task({ tasks }) {
  console.log(tasks);
  return (
    <table className="w-full text-xl text-left border">
      <thead>
        <tr>
          <th width="60%">Task Name</th>
          <th>Deadline</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
      {tasks.map(())}
      </tbody>
    </table>
  );
}
