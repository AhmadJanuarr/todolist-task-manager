import { StateCreator, create } from "zustand";
import { Task, TasksTypes } from "../types/task";
import { persist } from "zustand/middleware";

const createTaskStore: StateCreator<TasksTypes> = (set) => ({
    tasks: [],
    upTasks: () => set((state) => ({ tasks: [...state.tasks] })),
    action:
    {
        addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
        deleteTask: (id) => set((state) => ({ ...state, tasks: state.tasks.filter((task) => task.id !== id) })),
        updateTask: (id, updateTask) => set((state) => ({ tasks: state.tasks.map((task) => task.id === id ? { ...task, ...updateTask } : task) }))
    }
})

export const useTasksStore = create<TasksTypes>()(
    persist(createTaskStore, {
        name: "tasks"
    }))