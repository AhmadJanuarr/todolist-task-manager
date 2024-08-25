export interface InputTypes {
    type: "select" | "text" | "date",
    name: string
    id: string
    htmlFor: string
    placeholder?: string
    label: string
    value: string
    onChange: (e: ChangeEvent<any>) => void;
}