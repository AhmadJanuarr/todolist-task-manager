import Button from "../Button";
import Task from "./task";

function TaskHeader({ addTaskForm, setAddTaskForm }) {
  const handleDelete = () => {
    setAddTaskForm(!addTaskForm);
  };
  const handleAdd = () => {
    setAddTaskForm(!addTaskForm);
  };
  return (
    <div className="flex justify-between w-full py-5">
      <div className="text-4xl">Tasks</div>
      <div className="flex gap-3">
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="success" onClick={handleAdd}>
          Add Task
        </Button>
      </div>
    </div>
  );
}

export default function TasksList({
  addTaskForm,
  setAddTaskForm,
  tasks,
  setTasks,
}) {
  return (
    <>
      <div className="w-full h-[42em] border rounded px-7 py-6">
        <TaskHeader addTaskForm={addTaskForm} setAddTaskForm={setAddTaskForm} />
        <Task tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}
