import Button from "../Button";
import Task from "./task";

function TaskHeader({
  addTaskForm,
  setAddTaskForm,
  setTasks,
  selectedTasksById,
  setSelectedTasksById,
}) {
  const handleDelete = () => {
    setTasks((tasks) =>
      tasks.filter((task) => !selectedTasksById.includes(task.id))
    );
    setSelectedTasksById([]);
  };

  const handleAdd = () => {
    setAddTaskForm(!addTaskForm);
  };

  console.log(selectedTasksById);
  return (
    <div className="flex justify-between w-full py-5">
      <div className="hidden text-2xl">Tasks</div>
      <select
        name="name"
        id="name"
        className="w-[10em] border rounded text-md border-gray text-green"
      >
        <option value="Show All Tasks">Show All Tasks</option>
        <option value="Show In Progress">Show in Progress</option>
        <option value="Show Not Progress">Show Not Progress</option>
        <option value="Show Done">Show Done</option>
      </select>
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
  selectedTasksById,
  setSelectedTasksById,
}) {
  return (
    <>
      <div className="w-full desktop:h-[42em] laptop:h-[20em] rounded laptop:p-7 px-4 overflow-y-auto ">
        <hr />
        <TaskHeader
          addTaskForm={addTaskForm}
          setAddTaskForm={setAddTaskForm}
          tasks={tasks}
          setTasks={setTasks}
          selectedTasksById={selectedTasksById}
          setSelectedTasksById={setSelectedTasksById}
        />
        <Task
          tasks={tasks}
          setTasks={setTasks}
          selectedTasksById={selectedTasksById}
          setSelectedTasksById={setSelectedTasksById}
        />
      </div>
    </>
  );
}
