import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {TextField} from "@mui/material";
import {useState} from "react";

export default function DialogTask(props) {
  const {open, handleClose, handleSave} = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [task, setTask] = useState({})

  const handleInput = (field) => {
    return (event) => {
      // task = {title: 'dfsdfsdfsdfsdf'}
      // {title: "ssss", content: 'dfsdfsdfsdfsdf'}
      setTask({...task, [field]: event.target.value});
    }
  }

  const handleTask = () => {
    handleSave({...task});
    setTask({});
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        Add task
      </DialogTitle>
      <DialogContent style={{padding: '10px'}}>
        <TextField
          fullWidth
          id="outlined-textarea"
          label="Title"
          onChange={handleInput('title')}
        />
        <TextField
          fullWidth
          style={{marginTop: '10px'}}
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={4}
          onChange={handleInput('content')}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleTask}>
          SAVE
        </Button>
        <Button onClick={handleClose} autoFocus>
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  );
}
