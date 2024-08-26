import Input from "./input";
import Button from "../Button/index";
import { useTaskForm, useTasksStore } from "../../stores/taskStore";
import { useState } from "react";
import { Task } from "../../types/task";


export default function FormInput() {
  const [title, setTitle] = useState(" ");
  const [deadline, setDeadline] = useState(" ");
  const [status, setStatus] = useState(" ");

  const [tasks, addTask] = useTasksStore((state) => [
    state.tasks,
    state.addTask,
  ]);
  console.log('tasks:', tasks);
  console.log('addTask:', addTask);


  const upForm = useTaskForm((state) => state.upForm);
  const handleCancel = () => {
    upForm()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task =
    {
      id: Date.now(),
      title,
      deadline,
      status,
    }
    addTask(newTask);
    upForm()
    setTitle("");
    setDeadline("");
    setStatus("");
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <Input
        htmlFor="deadline"
        type="date"
        name="deadline"
        id="deadline"
        label="Deadline"
        value={deadline}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDeadline(e.target.value)
        }
      />
      <Input
        htmlFor="status"
        type="select"
        name="status"
        id="status"
        label="Status"
        value={status}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStatus(e.target.value)
        }
      />
      <div className="flex justify-end gap-3 px-4 py-4">
        <Button variant="danger" onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
}
