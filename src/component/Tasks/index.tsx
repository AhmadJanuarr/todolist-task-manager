import {
  useTasksStore,
  useSelectedStore,
  useFilteredStore,
} from "../../stores/taskStore";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Task from "./task";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useModalStore } from "../../stores/modalStore";
import { useShallow } from "zustand/react/shallow";

function TaskHeader() {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false)
  const [selectedId] = useSelectedStore((state) => [state.selectedId]);
  const [openModalAddTask] = useModalStore(useShallow((state) => [state.openModalAddTask]));
  const [filtered, filteredName] = useFilteredStore((state) => [state.filtered, state.filteredName]);

  const handleDeleteOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAlert(false)
  };

  const deleteTask = useTasksStore((state) => state.deleteTask);

  const handleDelete = () => {
    if (selectedId.length === 0) {
      setAlert(true)
    } else {
      deleteTask(selectedId);
      setOpen(false);
    }
  };


  return (
    <>
      <div className="flex justify-between w-full py-5">
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Filter"
            value={filtered}
            onChange={(e) => filteredName(e.target.value)}
            autoWidth
          >
            <MenuItem value="All Tasks">Show All Tasks</MenuItem>
            <MenuItem value="Not Progress">Show Not Progress</MenuItem>
            <MenuItem value="In Progress">Show in Progress</MenuItem>
            <MenuItem value="Done">Show Done</MenuItem>
          </Select>
        </FormControl>
        <div className="flex gap-3">
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleDeleteOpen}
          >
            Delete
          </Button>
          <Button variant="outlined" onClick={openModalAddTask}>
            Add Task
          </Button>
        </div>
      </div>


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" classes={{ paper: "w-full" }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation of Deletion"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" >
            Are you sure you want to delete this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
        {alert && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">Please select at least one task.</Alert>
          </Stack>
        )}

      </Dialog>
    </>
  );
}

export default function TasksList() {
  return (
    <>
      <div className="w-full desktop:h-[42em] laptop:h-[20em] rounded laptop:p-7 px-4 ">
        <hr />
        <TaskHeader />
        <Task />
      </div>
    </>
  );
}
