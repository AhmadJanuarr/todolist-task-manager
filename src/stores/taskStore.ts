import { StateCreator, create } from "zustand";
import { FilteredTypes, SelectedTypes, TasksTypes } from "../types/task";
import { persist } from "zustand/middleware";

const createTaskStore: StateCreator<TasksTypes> = (set) => ({
    tasks: [],
    upTasks: () => set((state) => ({ tasks: [...state.tasks] })),
    addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
    deleteTask: (id: number[]) =>
        set((state) => ({
            ...state,
            tasks: state.tasks.filter((task) => !id.includes(task.id)),
        })),
    updateTask: (id, updateTask) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, ...updateTask } : task
            ),
        })),
});




const createSelectedStore: StateCreator<SelectedTypes> = (set, get) => ({
    selectedId: [],
    toggleSelected: (id: number) => {
        const { selectedId } = get();
        const newSelectedId = selectedId.includes(id)
            ? selectedId.filter((item) => item !== id)
            : [...selectedId, id];
        set({ selectedId: newSelectedId });
    },
});

//filtering name
const createFilteredStore: StateCreator<FilteredTypes> = (set) => ({
    filtered: "All Tasks",
    filteredName: (filtered) => set((state) => ({ ...state, filtered })),
})

export const useFilteredStore = create<FilteredTypes>(createFilteredStore);
export const useSelectedStore = create<SelectedTypes>(createSelectedStore);
export const useTasksStore = create<TasksTypes>()(
    persist(createTaskStore, {
        name: "tasks",
    })
);
