import { StateCreator, create } from "zustand";
import { ThemeTypes } from "../types/theme";
import { persist } from "zustand/middleware";

const createDarkModeStore: StateCreator<ThemeTypes> = (set) => ({
    isDarkMode: false,
    toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
})

export const useDarkModeStore = create<ThemeTypes>()(persist(createDarkModeStore, { name: "darkMode" }))