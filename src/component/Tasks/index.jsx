import Button from "../Button";
import Task from "./task";

function TaskHeader({ addBook, setAddBook }) {
  const handleDelete = () => {
    setAddBook(!addBook);
  };
  const handleAdd = () => {
    setAddBook(!addBook);
  };
  return (
    <div className="flex justify-between w-full py-5">
      <div className="text-4xl">Tasks</div>
      <div className="flex gap-3">
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="success" onClick={handleAdd}>
          Add Task
        </Button>
      </div>
    </div>
  );
}

export default function TasksList({ addBook, setAddBook }) {
  return (
    <>
      <div className="w-full h-[42em] border rounded px-7 py-6">
        <TaskHeader addBook={addBook} setAddBook={setAddBook} />
        <Task />
      </div>
    </>
  );
}
