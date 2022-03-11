import {Avatar, ListItem, ListItemAvatar, ListItemText, Tooltip, Typography} from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MyCard = (props) => {
  const {
    id= 0,
    title= 'Create a New Landing UI',
    content= "Choose and Customise a Design on Our Online Logo Maker! Create Your Perfect Brand Logo Fast & Easy.",
    label= {id: 0, name: 'Complete', color: '#008000', backgroundColor: '#e3f4eb'},
    budget= '$225',
    dateStart= '2015-05-16T05:50:06.7199222+07:00',
    dateEnd= '2016-05-16T05:50:06.7199222+07:00', // datetime
    members= [
      {
        id: 0,
        name: 'Phạm Minh Sáng',
        avatar: 'https://freenice.net/wp-content/uploads/2021/08/Anh-avatar-anime-cute-de-thuong-cho-nu.jpg',
      },
      {
        id: 1,
        name: 'Nguyễn Thành Long',
        avatar: 'https://thao68.com/wp-content/uploads/2022/02/avatar-hero-team-15.jpg',
      },
      {
        id: 2,
        name: 'Nguyễn Tiến Đạt',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jin_for_Dispatch_%22Boy_With_Luv%22_MV_behind_the_scene_shooting%2C_15_March_2019_01_%28cropped%29.jpg/375px-Jin_for_Dispatch_%22Boy_With_Luv%22_MV_behind_the_scene_shooting%2C_15_March_2019_01_%28cropped%29.jpg',
      },
      {
        id: 3,
        name: 'Dương Thị Thùy',
        avatar: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/2/5/1001294/Ca-Si-Taeyeon-SNSD.jpg',
      }
    ],
    comments= [
      {id: 0, content: 'Comment of Sang', idUser: 0}
    ],
    attachFile= [
      {urlFile: 'https://freenice.net/wp-content/uploads/2021/08/Anh-avatar-anime-cute-de-thuong-cho-nu.jpg', type: 'image'}
    ],
    join= {
      id: 0,
      name: 'Phạm Minh Sáng',
      avatar: 'https://freenice.net/wp-content/uploads/2021/08/Anh-avatar-anime-cute-de-thuong-cho-nu.jpg',
    },
    author= {
      id: 0,
      name: 'Phạm Minh Sáng',
      avatar: 'https://freenice.net/wp-content/uploads/2021/08/Anh-avatar-anime-cute-de-thuong-cho-nu.jpg',
    },
    status= 'Archive',
    type= {
      id: 2,
      name: 'donéList'
    },
    onRemove,
    onChange,
  } = props;

  const handlerDelete = () => {
    onRemove(id)
  };

  const handlerChange = () => {
    console.log('=== handlerChange: ',id)
    onChange(id)
  };

  let img1 = '';
  let img2 = '';
  let img3 = '';
  if(members.length === 1) {
    img2 = 'none'
    img3 = 'none'
  }
  else if(members.length === 2) {
    img3 = 'none';
  }

  return (
    <ListItem alignItems="flex-start" onClick={handlerChange}>
      {/* <ListItemAvatar>
        <Avatar
          alt="Howard"
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
              {title}
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
            <Avatar
              alt="Travis"
              src={members[0].avatar}
              sx={{
                boxShadow: "0 0 4px rgba(0,0,0,0.4)",
                border: "1px solid #ccc",
                display: img1
              }}
            ></Avatar>
            <Avatar
              alt="Travis"
              src={members[1].avatar}
              sx={{
                boxShadow: "0 0 4px rgba(0,0,0,0.4)",
                border: "1px solid #ccc",
                position: "absolute",
                top: "45px",
                left: "40px",
                display: img2
              }}
            ></Avatar>
            <span style={{
              color: '#fff',
              backgroundColor: "#9db0c9",
              padding: "10px",
              borderRadius: "500px",
              position: "absolute",
              top: "45px",
              left: "60px",
              boxShadow: "0 0 4px rgba(0,0,0,0.4)",
              boxSizing: "border-box",
              display: img3
            }}>{members.length - 2} +</span>
          </ListItemAvatar>
        }
      />
      <ListItemText
        primary={
          <React.Fragment>
            <Typography
              sx={{display: 'flex', justifyContent: "center", backgroundColor: label.backgroundColor, padding: "5px", borderRadius: "20px", width: "80px", float: "right"}}
              component="span"
              variant="body2"
              color={label.color}
              fontWeight="bold"
            >
              {label.name}
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
              {budget}
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
