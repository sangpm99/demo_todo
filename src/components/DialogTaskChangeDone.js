import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {TextField} from "@mui/material";
import {useState, useEffect} from "react";
import MyCardDoing from './MyCardDoing';
import {FormControlLabel, RadioGroup, Radio} from "@mui/material";
import DatePicker from "react-date-picker";
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


export default function DialogTaskChange(props) {
  const {open, handleClose, handleChangeDone, taskChangeDone} = props;
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
    handleChangeDone({...task});
    setTask({});
  }

  useEffect(() => {
    console.log(taskChangeDone)
    if(taskChangeDone)setTask(taskChangeDone)
  }, [taskChangeDone])

  // For Detail
  const [date, setDate] = useState(new Date())

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [personName, setPersonName] = React.useState([]);

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const option = [
    'Nguyễn Thị A',
    'Phạm Văn B',
    'Đào Minh C',
    'Trần Hải D'
  ]

  const myButton = {
    width: '100px',
    margin: '5px',
    border: 'none',
    padding: '5px',
    borderRadius: '4px'
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <div style={{display: "flex"}}>
        <div>
        <DialogTitle id="responsive-dialog-title">
        {task.title}
      </DialogTitle>
      <DialogContent style={{padding: '10px'}}>
        <TextField
          fullWidth
          style={{marginTop: '10px'}}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={2}
          onChange={handleInput('content')}
          value={task.content}
        />
        <TextField
          fullWidth
          type="number"
          style={{marginTop: '10px'}}
          id="outlined-multiline-static"
          label="Budge"
          multiline
          onChange={handleInput('content')}
          value="$198"
        />
        <RadioGroup
          defaultValue="complete"
          row
        >
          <FormControlLabel value="complete" control={<Radio />} label="Complete"/>
          <FormControlLabel value="pending" control={<Radio />} label="Pending"/>
          <FormControlLabel value="approved" control={<Radio />} label="Approved"/>
        </RadioGroup>

        <div style={{display: "flex"}}>
          <div>
            <h4>Date Start</h4>
            <DatePicker onChange={setDate} value={date} label="Date Start"/>
          </div>
          <div style={{marginLeft: "20px"}}>
            <h4>Date End</h4>
            <DatePicker onChange={setDate} value={date} label="Date Start"/>
          </div>
        </div>
        <h4>Add Member</h4>
        <Select
          fullWidth
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange2}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {option.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        <Button
            style={{marginTop: "5px"}}
            variant="contained"
            component="label"
          >
            Attach File
            <input
              type="file"
              hidden
            />
        </Button>
        <TextField
          fullWidth
          style={{marginTop: '10px'}}
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={2}
          onChange={handleInput('content')}
        />
        <button style={{backgroundColor: "#5cb85c", color: '#fff', border: '1px solid #ccc', borderRadius: '5px'}}>Send Comments</button>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleTask} style={{color: '#5cb85c'}}>
          SAVE
        </Button>
        <Button onClick={handleClose} style={{color: '#d9534f'}}>
          CLOSE
        </Button>
      </DialogActions>
        </div>
        <div>
          <p>Suggested</p>
          <button style={myButton}>Join</button>
          <br></br>
          <button style={myButton}>Member</button>
          <br></br>
          <button style={myButton}>Labels</button>
          <br></br>
          <button style={myButton}>Date</button>
          <br></br>
          <button style={myButton}>Attachment</button>
          <br></br>
          <p>Actions</p>
          <button style={myButton}>Move</button>
          <br></br>
          <button style={myButton}>Copy</button>
          <br></br>
          <button style={myButton}>Archive</button>
          <br></br>
          <button style={myButton}>Share</button>
        </div>
      </div>
    </Dialog>
  );
}
