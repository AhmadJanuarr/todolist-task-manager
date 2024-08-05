import { Header } from "./component/Header";
import { useState } from "react";
import TasksList from "./component/Tasks";
import TaskForm from "./component/Tasks/ModalTaskForm";
import { useEffect } from "react";

function App() {
  const [addTaskForm, setAddTaskForm] = useState(false);
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");

  const [tasks, setTasks] = useState(() => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");
    if (tasksFromLocalStorage) {
      return JSON.parse(tasksFromLocalStorage);
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (tasks === undefined) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <>
      <div className="relative flex justify-center w-screen h-screen bg-gray-300 font-kreon text-primary">
        <div className="w-1/2">
          <Header />
          <TasksList
            addTaskForm={addTaskForm}
            setAddTaskForm={setAddTaskForm}
            tasks={tasks}
            setTasks={setTasks}
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
