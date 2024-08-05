import FormInput from "./taskFormInput";
export default function TaskForm({
  tasks,
  setTasks,
  task,
  setTask,
  deadline,
  setDeadline,
  status,
  setStatus,
  setAddBook,
}) {
  return (
    <div className="absolute flex flex-col items-center justify-center h-screen ">
      <div className="py-6 px-7">
        <FormInput
          tasks={tasks}
          setTasks={setTasks}
          task={task}
          setTask={setTask}
          deadline={deadline}
          setDeadline={setDeadline}
          status={status}
          setStatus={setStatus}
          setAddBook={setAddBook}
        />
      </div>
    </div>
  );
}
