import { create, StateCreator } from "zustand";
import { TaskFormProps } from "../types/task";

const createModalStore: StateCreator<TaskFormProps> = (set) => ({
    modalAddTask: false,
    openModalAddTask: () => set({ modalAddTask: true }),
    closeModalAddTask: () => set({ modalAddTask: false }),
});

export const useModalStore = create<TaskFormProps>(createModalStore);
