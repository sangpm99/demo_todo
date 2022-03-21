import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import {useState, useEffect} from "react";
import DateTimePicker from "react-datetime-picker";
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Autocomplete, Card } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import PropTypes from 'prop-types';
import MultiSelectUnstyled from '@mui/base/MultiSelectUnstyled';
import { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';

import Combobox from "react-widgets/Combobox";
import {Image} from 'antd'


export default function DialogTaskChange(props) {
  const {open, handleClose, handleChange, taskChange} = props;
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
    handleChange({...task});
    setTask({});
  }

  useEffect(() => {
    if(taskChange)setTask(taskChange)
  }, [taskChange])

  // For Detail
  const [dateStart, setDateStart] = useState(new Date())

  const [dateEnd, setDateEnd] = useState(new Date())

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

  const label = [
    {id: 0, name: 'Complete', color: '#008000', backgroundColor: '#e3f4eb'},
    {id: 1, name: 'Pending', color: '#e8b65f', backgroundColor: '#fbf2e2'},
    {id: 2, name: 'Approved', color: '#afbac7', backgroundColor: '#e6e7ea'},
    {id: 3, name: 'Error', color: '#d9534f', backgroundColor: '#f1c7c6'}
  ]

  const [allowCustom, setAllowCustom] = React.useState(false);

  const onChange = (event) => {
    setAllowCustom(event.target.checked);
  };

  const myButton = {
    width: '100px',
    margin: '5px',
    border: 'none',
    padding: '5px',
    borderRadius: '4px',
    boxShadow: '0 0 3px rgba(0,0,0,0.4)',
    cursor: 'pointer',
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
          onChange={handleInput('budge')}
          value={task.budget}
          InputProps={{
            startAdornment: <InputAdornment position="start" type="number">$</InputAdornment>,
          }}
        />

        {/* For Label */}
        <Combobox
          data={label}
          dataKey='id'
          textField='name'
          style={{marginTop: '20px'}}
          defaultValue={task.label}
          onChange={handleInput('label')}
        />

        <div style={{display: "flex"}}>
          <div>
            <h4>Date Start</h4>
            <DateTimePicker onChange={handleInput('dateStart')} value={task.dateStart} label="Date Start"/>
          </div>
          <div style={{marginLeft: "10px"}}>
            <h4>Date End</h4>
            <DateTimePicker onChange={handleInput('dateEnd')} value={task.dateEnd} label="Date Start"/>
          </div>
        </div>

        
        <Button
            style={{marginTop: "20px", backgroundColor: '#b99774', color: '#fff'}}
            variant="contained"
            component="label"
            onChange={handleInput('attachFile')}
          >
            Attach File
            <input
              type="file"
              multiple
              style={{marginLeft: '20px'}}
              
            />
        </Button>
        {/* <Image
          src={task?.attachFile?.[0]?.urlFile}
          style={{width: "50px", height: "50px"}}
        ></Image> */}
        {
          task?.attachFile && task?.attachFile?.map((element, index) => {
            return(
              <div style={{width: '100px', height: '100px', display: 'inline-block', marginTop: '20px'}}>
                <Image
                src={element.urlFile}
                style={{width: "50px", height: "50px"}}
                ></Image>
              </div>
            )
          })
        }
        <h4>Comments</h4>
        {
          task?.comments && task?.comments?.map((element, index) => {
            return(
              <div key={index}>
                <p>{index + 1}. {element.content}</p>
              </div>
            )
          })
        }
        <TextField
          fullWidth
          style={{marginTop: '10px'}}
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={2}
          onChange={handleInput('comments')}
        />
        {/* <button style={{backgroundColor: "#5cb85c", color: '#fff', border: '1px solid #ccc', borderRadius: '5px'}}>Send Comments</button> */}
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
