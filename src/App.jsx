import { Header } from "./component/Header";
import { useState, useEffect } from "react";
import TasksList from "./component/Tasks";
import TaskForm from "./component/Tasks/ModalTaskForm";

function App() {
  const [addTaskForm, setAddTaskForm] = useState(false);
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");
  const [selectedTasksById, setSelectedTasksById] = useState([]);
  const [tasks, setTasks] = useState(() => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");
    return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log(tasks);

  return (
    <>
      <div className="flex justify-center w-full h-full bg-gray-300 font-kreon text-primary">
        <div className="px-3 overflow-hidden">
          <Header />
          <TasksList
            addTaskForm={addTaskForm}
            tasks={tasks}
            selectedTasksById={selectedTasksById}
            setAddTaskForm={setAddTaskForm}
            setTasks={setTasks}
            setSelectedTasksById={setSelectedTasksById}
          />
        </div>

        {addTaskForm && (
          <TaskForm
            tasks={tasks}
            setTasks={setTasks}
            task={task}
            setTask={setTask}
            deadline={deadline}
            setDeadline={setDeadline}
            status={status}
            setStatus={setStatus}
            setAddTaskForm={setAddTaskForm}
          />
        )}
      </div>
    </>
  );
}

export default App;
