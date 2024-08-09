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
  setAddTaskForm,
}) {
  return (
    <div className="absolute flex flex-col items-center justify-center w-screen h-screen">
      <div className="py-6 px-7 laptop:w-[36em] w-full z-20	">
        <FormInput
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
      </div>
    </div>
  );
}
