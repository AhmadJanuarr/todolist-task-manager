import Input from "./input";
import Button from "../Button/index";
import { useTasksStore } from "../../stores/taskStore";
import { useState } from "react";
export default function FormInput({
  setAddTaskForm,
}) {
  const [title, setTitle] = useState(" ")
  const [deadline, setDeadline] = useState(" ")
  const [status, setStatus] = useState(" ")
  const [tasks, upTasks] = useTasksStore((state) => [state.tasks, state.upTasks]);



  const handleSubmit = (e: any) => {
    e.preventDefault();

    setAddTaskForm(false);
  };

  return (
    <form
      className="flex flex-col w-full bg-white border rounded "
      onSubmit={handleSubmit}
    >
      <h1 className="px-3 py-3 text-2xl text-center">Add Task</h1>
      <Input
        htmlFor="name"
        type="text"
        name="name"
        id="name"
        placeholder="Task name..."
        label="Task Name"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      />
      <Input
        htmlFor="deadline"
        type="date"
        name="deadline"
        id="deadline"
        label="Deadline"
        value={deadline}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeadline(e.target.value)}
      />
      <Input
        htmlFor="status"
        type="select"
        name="status"
        id="status"
        label="Status"
        value={status}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStatus(e.target.value)}
      />
      <div className="flex justify-end gap-3 px-4 py-4">
        <Button variant="danger" onClick={() => setAddTaskForm(false)}>
          Cancel
        </Button>
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
}
