import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import {useState} from "react";
import DateTimePicker from "react-datetime-picker";
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Autocomplete } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
// Member
import PropTypes from 'prop-types';
import MultiSelectUnstyled from '@mui/base/MultiSelectUnstyled';
import { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';

import Combobox from "react-widgets/Combobox";



export default function DialogTask(props) {
  const {open, handleClose, handleSave} = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [task, setTask] = useState({})

  const [dateStart, setDateStart] = useState(new Date())

  const [dateEnd, setDateEnd] = useState(new Date())

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

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

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

  // For Member
  const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };

  const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    min-width: 100%;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 5px;
    text-align: left;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '???';
      }
    }
  
    &::after {
      content: '???';
      float: right;
    }
    `,
  );

  
  const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 320px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
    `,
  );

  const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
  );

  const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
  `;

  const CustomMultiSelect = React.forwardRef(function CustomMultiSelect(props, ref) {
    const components = {
      Root: StyledButton,
      Listbox: StyledListbox,
      Popper: StyledPopper,
      ...props.components,
    };
    return <MultiSelectUnstyled {...props} ref={ref} components={components} />;
  });

  CustomMultiSelect.propTypes = {
    /**
     * The components used for each slot inside the Select.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components: PropTypes.shape({
      Listbox: PropTypes.elementType,
      Popper: PropTypes.func,
      Root: PropTypes.elementType,
    }),
  };

  const members = [
    {id: 0, name: 'Ph???m Minh S??ng', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jin_for_Dispatch_%22Boy_With_Luv%22_MV_behind_the_scene_shooting%2C_15_March_2019_01_%28cropped%29.jpg/375px-Jin_for_Dispatch_%22Boy_With_Luv%22_MV_behind_the_scene_shooting%2C_15_March_2019_01_%28cropped%29.jpg'},
    {id: 1, name: 'Nguy???n Th??nh Long', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Suga_x_Galaxy_Samsung_August_2021.png/375px-Suga_x_Galaxy_Samsung_August_2021.png'},
    {id: 2, name: 'Nguy???n Ti???n ?????t', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/J-Hope_on_the_Billboard_Music_Awards_red_carpet%2C_1_May_2019.jpg/375px-J-Hope_on_the_Billboard_Music_Awards_red_carpet%2C_1_May_2019.jpg'},
    {id: 3, name: 'D????ng Th??? Th??y', avatar: 'https://billboardvn.vn/wp-content/uploads/2019/11/9703c8a7gy1g867u0okpaj21xg1abhdv.jpeg'}
  ]

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        Add New
      </DialogTitle>
      <DialogContent style={{padding: '10px'}}>
        <TextField
          id="outlined-textarea"
          fullWidth
          label="Title"
          onChange={handleInput('title')}
          focused
        />
        <TextField
          fullWidth
          style={{marginTop: '10px'}}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={2}
          onChange={handleInput('content')}
        />

        <TextField
          fullWidth
          style={{marginTop: '10px'}}
          id="outlined-multiline-static"
          label="Budge"
          multiline
          InputProps={{
            startAdornment: <InputAdornment position="start" type="number">$</InputAdornment>,
          }}
          type="number"
          onChange={handleInput('budge')}
        />
        
        {/* For Label */}
        <Combobox
          data={label}
          dataKey='id'
          textField='name'
          style={{marginTop: '20px'}}
          onChange={this?.handleInput('label')}
        />


        <div style={{display: "flex"}}>
          <div>
            <h4>Date Start</h4>
            <DateTimePicker onChange={setDateStart} value={dateStart} label="Date Start"/>
          </div>
          <div style={{marginLeft: "20px"}}>
            <h4>Date End</h4>
            <DateTimePicker onChange={setDateEnd} value={dateEnd} label="Date End"/>
          </div>
        </div>
        <h4>Add Member</h4>
        <CustomMultiSelect onChange={this?.handleInput('members')}>
          {
            members.map((mem) => {
              return (
                <div key={mem.id}>
                  <StyledOption value={mem.id}>{mem.name}</StyledOption>
                </div>
              )
            })
          }
        </CustomMultiSelect>
        <br></br>
        {/* <Button
            style={{marginTop: "20px", backgroundColor: '#b99774', color: '#fff'}}
            variant="contained"
            component="label"
            onChange={handleInput('attachFile')}
          >
            
        </Button> */}
        Attach File :
            <input
              type="file"
              multiple
              style={{marginLeft: '20px'}}
              onChange={handleInput('attachFile')}
            />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleTask} style={{color: '#5cb85c'}}>
          SAVE
        </Button>
        <Button onClick={handleClose} autoFocus style={{color: '#d9534f'}}>
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  );
}
