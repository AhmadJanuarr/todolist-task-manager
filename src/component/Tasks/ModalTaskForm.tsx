import Button from "@mui/material/Button";
import { useTasksStore } from "../../stores/taskStore";
import { useState } from "react";
import { useModalStore } from "../../stores/modalStore";
import { Task } from "../../types/task";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Alert from '@mui/material/Alert';

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState(Date);
  const [status, setStatus] = useState("");
  const { modalAddTask, closeModalAddTask } = useModalStore((state) => ({
    modalAddTask: state.modalAddTask,
    closeModalAddTask: state.closeModalAddTask,
  }));

  const [tasks, addTask] = useTasksStore((state) => [
    state.tasks,
    state.addTask,
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now(),
      title,
      deadline,
      status,
    };
    addTask(newTask);
    closeModalAddTask();
    setTitle("");
    setDeadline("");
    setStatus("");
  };

  return (
    <div className="absolute flex flex-col items-center justify-center w-screen h-screen">
      <div className="py-6 px-7 laptop:w-[36em] w-full z-20">

        <Dialog
          open={modalAddTask}
          onClose={closeModalAddTask}
          classes={{ paper: "w-full" }}
          PaperProps={{
            onSubmit: handleSubmit,
            component: "form",
          }}
        >
          <DialogTitle>Create New Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Complete the details of your new task in this form and press
              "Save" to add it to your task list.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              type="text"
              name="name"
              id="name"
              label="Your Task"
              value={title}
              variant="standard"
              fullWidth
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
            <TextField
              required
              margin="dense"
              type="date"
              name="deadline"
              id="deadline"
              label="Deadline"
              variant="standard"
              fullWidth
              value={deadline}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDeadline(e.target.value)
              }
            />

            <FormControl fullWidth variant="standard" margin="dense">
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                required
                name="status"
                labelId="status-label"
                id="status-select"
                value={status}
                onChange={(e: SelectChangeEvent) => setStatus(e.target.value)}
                displayEmpty
              >
                <MenuItem value="">
                  <span></span>
                </MenuItem>
                <MenuItem value="Not Progress">Not Progress</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              color="secondary"
              variant="outlined"
              onClick={closeModalAddTask}
            >
              Cancel
            </Button>
            <Button type="submit" variant="outlined">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
