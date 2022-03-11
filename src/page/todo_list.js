import React, {useState} from 'react';
import Box from '@mui/material/Box';
import {Divider, List, Card, CardMedia} from "@mui/material";
import MyCard from "../components/MyCard";
import MyCardDoing from "../components/MyCardDoing";
import MyCardDone from "../components/MyCardDone";
import Button from "@mui/material/Button";
import DialogTask from "../components/DialogTask";
import DialogTaskChange from '../components/DialogTaskChange';
import DialogTaskChangeDoing from '../components/DialogTaskChangeDoing';
import DialogTaskChangeDone from '../components/DialogTaskChangeDone';
import DialogTaskAddDoing from '../components/DialogTaskAddDoing';
import DialogTaskAddDone from '../components/DialogTaskAddDone';
import MyItem from "../components/MyItem";
import {useSelector, useDispatch} from "react-redux";
import {addTodo, removeTaskTodo, changeTaskTodo} from '../stores/actions/todoList.action'
import {addDoing, removeTaskDoing, changeTaskDoing} from '../stores/actions/doingList.action'
import {addDone, removeTaskDone, changeTaskDone} from '../stores/actions/doneList.action'

const TodoList = () => {
  // State Open Add todo
  const [open, setOpen] = useState(false);

  // State Open Add doing
  const [openAddDoing, setOpenAddDoing] = useState(false);

  // State Open Add done
  const [openAddDone, setOpenAddDone] = useState(false);

  // State Open Change Todo
  const [openChange, setOpenChange] = useState(false);

  // Open change doing
  const [openChangeDoing, setOpenChangeDoing] = useState(false);

  // Open change done
  const [openChangeDone, setOpenChangeDone] = useState(false);

  const [taskChange, setTaskChange] = useState({});
  const [taskChangeDoing, setTaskChangeDoing] = useState({});
  const [taskChangeDone, setTaskChangeDone] = useState({});

  const {todoList, doingList, doneList} = useSelector(states => states);

  const dispatch = useDispatch();

  const handleClickOpenAdd = () => {
    setOpen(true);
  };
  const handleClickOpenAddDoing = () => {
    setOpenAddDoing(true);
  };
  const handleClickOpenAddDone = () => {
    setOpenAddDone(true);
  };

  // Function change todo
  const handleClickOpenChangeTodo = (id) => {
    const idx = todoList.findIndex(value => value.id === id)
    if(idx > -1) {
      console.log(todoList[idx])
    }
    setTaskChange(todoList[idx]);
    setOpenChange(true);
  };

  // Function change doing
  const handleClickOpenChangeDoing = (id) => {
    const idx1 = doingList.findIndex(value => value.id === id)
    if(idx1 > -1) {
      console.log(doingList[idx1])
    }
    setTaskChangeDoing(doingList[idx1]);
    setOpenChangeDoing(true);
  };

  // Function change done
  const handleClickOpenChangeDone = (id) => {
    const idx2 = doneList.findIndex(value => value.id === id)
    if(idx2 > -1) {
      console.log(doneList[idx2])
    }
    setTaskChangeDone(doneList[idx2]);
    setOpenChangeDone(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenChange(false);
    setOpenChangeDoing(false);
    setOpenChangeDone(false);
    setOpenAddDoing(false);
    setOpenAddDone(false);
  };

  // Save todo
  const handleSave = (task) => {
    dispatch(addTodo(task))
    setOpen(false);
  }

  // Save doing
  const handleSaveAddDoing = (task) => {
    dispatch(addDoing(task))
    setOpenAddDoing(false);
  }

  // Save done
  const handleSaveAddDone = (task) => {
    dispatch(addDone(task))
    setOpenAddDone(false);
  }

  // Save change todo
  const handleChange = (task) => {
    dispatch(changeTaskTodo(task))
    setOpenChange(false);
  }
  // Save change doing
  const handleChangeDoing = (task) => {
    dispatch(changeTaskDoing(task))
    setOpenChangeDoing(false);
  }

  // Save change done
  const handleChangeDone = (task) => {
    dispatch(changeTaskDone(task))
    setOpenChangeDone(false);
  }

  // Remove todo
  const handleRemoveToDo = (id) => {
    dispatch(removeTaskTodo(id))
  }
  // Remove doing
  const handleRemoveDoing = (id) => {
    dispatch(removeTaskDoing(id))
  }
  // Remove done
  const handleRemoveDone = (id) => {
    dispatch(removeTaskDone(id))
  }

  return (
    <div style={{padding: 20}}>
      <Box
        sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1,}}
      >
        <DialogTask
          open={open}
          handleClose={handleClose}
          handleSave={handleSave}
        />

        <DialogTaskAddDoing
          open={openAddDoing}
          handleClose={handleClose}
          handleSave={handleSaveAddDoing}
        />

        <DialogTaskAddDone
          open={openAddDone}
          handleClose={handleClose}
          handleSave={handleSaveAddDone}
        />

        <DialogTaskChange
          open={openChange}
          handleClose={handleClose}
          handleChange={handleChange}
          taskChange={taskChange}
        />

        <DialogTaskChangeDoing
          open={openChangeDoing}
          handleClose={handleClose}
          handleChangeDoing={handleChangeDoing}
          taskChangeDoing={taskChangeDoing}
        />

        <DialogTaskChangeDone
          open={openChangeDone}
          handleClose={handleClose}
          handleChangeDone={handleChangeDone}
          taskChangeDone={taskChangeDone}
        />
        {/* To do */}
        <MyItem>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="270"
              image="image/To-Do.png"
            />
          </Card>
          {todoList.map(({title, content, id, label, budget, dateStart, dateEnd, attachFile}, index) => 
            <div key={index}>
              <MyCard 
                id={id}
                title={title}
                content={content}
                label={label}
                budget={budget}
                dateStart={dateStart}
                dateEnd={dateEnd}
                attachFile={attachFile}
                onRemove={handleRemoveToDo}
                onChange={handleClickOpenChangeTodo}
              />
              <Divider variant="inset"/>
            </div>)
          }
          <Button
            style={{width: "100%", marginTop: '57px', backgroundColor: "#b99774"}}
            variant="contained"
            onClick={handleClickOpenAdd}
          >
            Add New
          </Button>
        </MyItem>

        {/* Doing */}
        <MyItem>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="270"
              image="image/Doing.png"
            />
          </Card>
          <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            {doingList.map(({title, content, id}, index) =>
              <>
                <MyCardDoing key={index} id={id} title={title} content={content} onRemove={handleRemoveDoing} onChange={handleClickOpenChangeDoing}/>
                <Divider variant="inset"/>
              </>
            )}
            <Button
            style={{width: "100%", marginTop: '50px', backgroundColor: "#a68ba0"}}
            variant="contained"
            onClick={handleClickOpenAddDoing}
            >
            Add New
          </Button>
          </List>
        </MyItem>

        {/* Done */}
        <MyItem>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="270"
              image="image/Done.png"
            />
          </Card>
          <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            {/* <MyCard/>
            <Divider variant="inset" component="li"/>
            <MyCard/> */}
            {doneList.map(({title, content, id}, index) =>
              <>
                <MyCardDone key={index} id={id} title={title} content={content} onRemove={handleRemoveDone} onChange={handleClickOpenChangeDone}/>
                <Divider variant="inset"/>
              </>
            )}
            <Button
            style={{width: "100%", marginTop: '50px', backgroundColor: "#9db0c9"}}
            variant="contained"
            onClick={handleClickOpenAddDone}
            >
            Add New
            </Button>
          </List>
        </MyItem>
      </Box>
    </div>
  )
}

export default TodoList;
