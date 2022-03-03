import {Avatar, ListItem, ListItemAvatar, ListItemText, Tooltip, Typography} from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MyCard = (props) => {
  const {
    id = 0,
    image_url = '/static/images/avatar/2.jpg',
    title = 'Summer BBQ',
    content = 'to Scott, Alex, Jennifer\n  — Wish I could come, but I\'m out of town this…',
    onRemove,
  } = props;

  const handlerDelete = () => onRemove(id);

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Travis Howard" src={image_url} />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <React.Fragment>
            <Typography
              sx={{display: 'inline'}}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {content}
            </Typography>
          </React.Fragment>
        }
      />
      <Tooltip title="Edit task">
        <IconButton size="large" aria-label="delete">
          <EditIcon/>
        </IconButton>
      </Tooltip>
      <Tooltip title="remove task">
        <IconButton onClick={handlerDelete} size="large" aria-label="delete">
          <DeleteIcon/>
        </IconButton>
      </Tooltip>
    </ListItem>
  )
}

export default MyCard
