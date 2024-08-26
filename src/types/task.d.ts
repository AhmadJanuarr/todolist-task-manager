export interface TasksTypes {
    tasks: Task[];
    upTasks: () => void;
    addTask: (newTask: Task) => void;
    deleteTask: (id: number) => void;
    updateTask: (id: number, updateTask: Partial<Task>) => void;
}

export type Task = {
    id: number;
    title: string;
    deadline: HTMLInputTypeAttribute;
    selected?: boolean;
    status: string
};


type HTMLInputTypeAttribute = "number" | "search" | "button" | "time" | "image" | "text" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "month" | "password" | "radio" | "range" | (string & {})
