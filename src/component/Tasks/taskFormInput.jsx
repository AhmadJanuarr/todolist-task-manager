import Input from "./input";
import Button from "./../Button/index";
export default function FormInput({
  tasks,
  setTasks,
  task,
  setTask,
  deadline,
  setDeadline,
  status,
  setStatus,
  setAddTaskForm,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTaks = {
      id: Date.now(),
      task,
      deadline,
      status,
    };
    setTasks([...tasks, newTaks]);
    setTask("");
    setDeadline("");
    setStatus("");
    setAddTaskForm(false);
  };

  return (
    <form
      className="flex flex-col w-full bg-white border rounded "
      onSubmit={handleSubmit}
    >
      <h1 className="px-3 py-3 text-2xl text-center">Add Task</h1>
      <Input
        htmlFor="name"
        type="text"
        name="name"
        id="name"
        placeholder="Task name..."
        label="Task Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Input
        htmlFor="deadline"
        type="date"
        name="deadline"
        id="deadline"
        label="Deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <Input
        htmlFor="status"
        type="select"
        name="status"
        id="status"
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <div className="flex justify-end gap-3 px-4 py-4">
        <Button variant="danger" onClick={() => setAddTaskForm(false)}>
          Cancel
        </Button>
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
}
