import {Avatar, ListItem, ListItemAvatar, ListItemText, Tooltip, Typography} from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useSelector, useDispatch} from "react-redux";
import { useState } from "react";


const MyCard = (props) => {
  const {
    todo,
    onRemove,
    onChange,
  } = props;


  let img1 = '';
  let img2 = '';
  let img3 = '';
  if(todo.members.length === 1) {
    img2 = 'none'
    img3 = 'none'
  }
  else if(todo.members.length === 2) {
    img3 = 'none';
  }

  const handlerDelete = () => {
    onRemove(todo.id)
  };

  const handlerChange = () => {
    console.log('=== handlerChange: ',todo.id)
    onChange(todo.id)
  };

  



  return (
    <ListItem alignItems="flex-start" onClick={handlerChange}>
      {/* <ListItemAvatar>
        <Avatar
          alt="Travis"
          src={image_url}
        ></Avatar>
      </ListItemAvatar> */}
      <ListItemText
        style={{maxWidth: "60%"}}
        primary={
          <React.Fragment>
            <Typography
              sx={{display: 'inline'}}
              component="span"
              variant="body2"
              color="text.primary"
              fontWeight="bold"
            >
              {todo.title}
            </Typography>
          </React.Fragment>
        }
        // secondary={
        //   <React.Fragment>
        //     <Typography
        //       sx={{display: 'inline'}}
        //       component="span"
        //       variant="body2"
        //       color="text.primary"
        //     >
        //       {content}
        //     </Typography>
        //   </React.Fragment>
        // }
        secondary={
          <ListItemAvatar>
            {
              todo.members.map((element, index) => {
                if(index > 1) return null
                return (
                  <div key={index}>
                    <Avatar
                      alt="Travis"
                      src={element.avatar}
                      sx={{
                        boxShadow: "0 0 4px rgba(0, 0, 0, 0.4)",
                        border: "1px solid #ccc",
                        position: "absolute",
                        top: "45px",
                        left: 10 + index*30 + 'px',
                        display: ''
                      }}
                    ></Avatar>
                  </div>
                )
              })
              
            }
            <span style={{
                color: '#fff',
                backgroundColor: "#b99774",
                padding: "10px",
                borderRadius: "500px",
                position: "absolute",
                top: "45px",
                left: "60px",
                boxShadow: "0 0 4px rgba(0,0,0,0.4)",
                boxSizing: "border-box",
                display: img3
              }}>{todo.members.length - 2} +</span>
            
          </ListItemAvatar>
        }
      />
      <ListItemText
        primary={
          <React.Fragment>

            <Typography
              sx={{display: 'flex', justifyContent: "center", backgroundColor: todo.label.backgroundColor, padding: "5px", borderRadius: "20px", width: "80px", float: "right"}}
              component="span"
              variant="body2"
              color={todo.label.color}
              fontWeight="bold"
            >
              {todo.label.name}
            </Typography>
            <div style={{clear: "both"}}></div>
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography
              sx={{display: "flex", justifyContent: "flex-end", marginTop: "10px"}}
              component="span"
              variant="body2"
              color="text.primary"
              fontWeight="bold"
            >
              ${todo.budget}
            </Typography>
            <Typography
              sx={{textAlign: "end"}}
            >
              Budget
            </Typography>
          </React.Fragment>
        }
      />
      {/* <Tooltip title="Edit task">
        <IconButton onClick={handlerChange} size="large" aria-label="delete">
          <EditIcon/>
        </IconButton>
      </Tooltip>
      <Tooltip title="remove task">
        <IconButton onClick={handlerDelete} size="large" aria-label="delete">
          <DeleteIcon/>
        </IconButton>
      </Tooltip> */}
    </ListItem>
  )
}

export default MyCard
