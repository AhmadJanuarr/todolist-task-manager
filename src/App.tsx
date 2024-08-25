import { Header } from "./component/Header";
import { useState, useEffect } from "react";
import TasksList from "./component/Tasks";
import TaskForm from "./component/Tasks/ModalTaskForm";

function App() {
  const [addTaskForm, setAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");
    return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);



  return (
    <>
      <div className="flex justify-center w-full bg-gray-300  h-[100vh] font-kreon text-primary">
        <div className="px-3 overflow-hidden laptop:w-1/2">
          <Header />
          <TasksList
            addTaskForm={addTaskForm}
            setAddTaskForm={setAddTaskForm}
          />
        </div>

        {addTaskForm && (
          <TaskForm
            setAddTaskForm={setAddTaskForm}
          />
        )}
      </div>
    </>
  );
}

export default App;
