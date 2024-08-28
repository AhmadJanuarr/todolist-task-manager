import Footer from "./component/Footer";
import Header from "./component/Header";
import TasksList from "./component/Tasks";
import TaskForm from "./component/Tasks/ModalTaskForm";
import { useDarkModeStore } from "./stores/darkModeStore";
import { useModalStore } from "./stores/modalStore";

function App() {
  const [modalAddTask] = useModalStore((state) => [state.modalAddTask]);
  const [isDarkMode] = useDarkModeStore((state) => [state.isDarkMode]);
  console.log(isDarkMode);
  return (
    <>
      <div
        className={`flex justify-center w-full bg-gray-300 h-[100vh] font-kreon ${isDarkMode ? "bg-dark text-white" : ""
          }`}
      >
        <div className="px-3 overflow-hidden laptop:w-[60%]">
          <Header />
          <TasksList />
          <Footer />
        </div>
        {modalAddTask && <TaskForm />}
      </div>
    </>
  );
}

export default App;
