import { Header } from "./component/Header";
import TasksList from "./component/Tasks";
import TaskForm from "./component/Tasks/ModalTaskForm";
import { useTaskForm } from "./stores/taskStore";

function App() {
  const [form] = useTaskForm((state) => [state.form]);

  return (
    <>
      <div className="flex justify-center w-full bg-gray-300  h-[100vh] font-kreon text-primary">
        <div className="px-3 overflow-hidden laptop:w-1/2">
          <Header />
          <TasksList />
        </div>

        {form && (
          <TaskForm />
        )}
      </div>
    </>
  );
}

export default App;
