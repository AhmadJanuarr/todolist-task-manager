import Header from "./component/Header";
import TasksList from "./component/Tasks";
import TaskForm from "./component/Tasks/ModalTaskForm";
import { useModalStore } from "./stores/modalStore";

function App() {
  const [modalAddTask] = useModalStore((state) => [state.modalAddTask]);
  return (
    <>
      <div className="flex justify-center w-full bg-gray-300  h-[100vh] font-kreon text-primary">
        <div className="px-3 overflow-hidden laptop:w-1/2">
          <Header />
          <TasksList />
        </div>
        {modalAddTask && <TaskForm />}
      </div>
    </>
  );
}

export default App;
