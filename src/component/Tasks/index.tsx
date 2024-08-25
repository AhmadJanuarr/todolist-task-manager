import { useTasksStore } from "../../stores/taskStore";
import { useShallow } from "zustand/react/shallow";
import Button from "../Button";
import Task from "./task";

interface FormTypes {
  addTaskForm: boolean;
  setAddTaskForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function TaskHeader({ addTaskForm, setAddTaskForm }: FormTypes) {
  const handleAdd = () => {
    setAddTaskForm(!addTaskForm);
  };

  const select = useTasksStore((state) => state.action.selected);

  const deleteTask = useTasksStore((state) => state.action.deleteTask);
  const handleDelete = (id: number) => {
    deleteTask(id)
  }
  return (
    <div className="flex justify-between w-full py-5">
      <select
        name="name"
        id="name"
        className="w-[10em] laptop:text-[16px] border rounded text-[11px] border-gray text-green"
      >
        <option value="Show All Tasks">Show All Tasks</option>
        <option value="Show In Progress">Show in Progress</option>
        <option value="Show Not Progress">Show Not Progress</option>
        <option value="Show Done">Show Done</option>
      </select>
      <div className="flex gap-3">
        <Button variant="danger" onClick={handleDelete()}>
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

}) {
  return (
    <>
      <div className="w-full desktop:h-[42em] laptop:h-[20em] rounded laptop:p-7 px-4 overflow-y-auto">
        <hr />
        <TaskHeader
          addTaskForm={addTaskForm}
          setAddTaskForm={setAddTaskForm}
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
