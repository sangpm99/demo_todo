import React, {useState} from 'react';
import Box from '@mui/material/Box';
import {Divider, List, Card, CardMedia} from "@mui/material";
import MyCard from "../components/MyCard";
import Button from "@mui/material/Button";
import DialogTask from "../components/DialogTask";
import MyItem from "../components/MyItem";
import {useSelector, useDispatch} from "react-redux";
import {addTodo, removeTask} from '../stores/actions/todoList.action'

const TodoList = () => {
  const [open, setOpen] = useState(false);
  const {todoList, doingList} = useSelector(states => states);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (task) => {
    dispatch(addTodo(task))
    setOpen(false);
  }

  const handleRemoveToDo = (id) => {
    dispatch(removeTask(id))
  }

  const handleRemoveDoing = (id) => {

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
        <MyItem>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="image/To-Do.png"
            />
          </Card>
          {todoList.map(({title, content, id}, index) =>
            <>
              <MyCard key={index} id={id} title={title} content={content} onRemove={handleRemoveToDo}/>
              <Divider variant="inset"/>
            </>
          )}
          <Button
            style={{width: "100%", marginTop: '50px'}}
            variant="contained"
            onClick={handleClickOpen}
          >
            Add task
          </Button>
        </MyItem>
        <MyItem>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="image/Doing.png"
            />
          </Card>
          <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            {doingList.map(({title, content, id}, index) =>
              <>
                <MyCard key={index} id={id} title={title} content={content} onRemove={handleRemoveDoing}/>
                <Divider variant="inset"/>
              </>
            )}
          </List>
        </MyItem>
        <MyItem>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="image/Done.png"
            />
          </Card>
          <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            <MyCard/>
            <Divider variant="inset" component="li"/>
            <MyCard/>
          </List>
        </MyItem>
      </Box>
    </div>
  )
}

export default TodoList;
