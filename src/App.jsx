import { Header } from "./component/Header";
import { useState } from "react";
import TasksList from "./component/Tasks";
import TaskForm from "./component/Tasks/ModalTaskForm";
function App() {
  const [addBook, setAddBook] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");
  const [isFormInvsible, setIsFormInvisible] = useState(false);
  return (
    <>
      <div className="relative flex justify-center w-screen h-screen bg-gray-300 font-kreon text-primary">
        <div className="w-1/2">
          <Header />
          <TasksList addBook={addBook} setAddBook={setAddBook} />{" "}
        </div>
        {addBook && (
          <TaskForm
            tasks={tasks}
            setTasks={setTasks}
            task={task}
            setTask={setTask}
            deadline={deadline}
            setDeadline={setDeadline}
            status={status}
            setStatus={setStatus}
          />
        )}
      </div>
    </>
  );
}

export default App;
