export interface TasksTypes {
    tasks: Task[];
    action: Action;
    upTasks: () => void;
}

export type Task = {
    id: number;
    task: string;
    deadline: Date;
    selected: boolean;
    status: "Not Started" | "In Progress" | "Done";
};

export type Action = {
    addTask: (newTask: Task) => void;
    deleteTask: (id: number) => void;
    updateTask: (id: number, updateTask: Partial<Task>) => void;
}