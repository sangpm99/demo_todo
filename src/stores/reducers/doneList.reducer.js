import { compose } from "@mui/system";
import {ADD_ITEM_DONE, CHANGE_ITEM_DONE, REMOVE_ITEM_DONE} from "../type";

const initState = [
  {
    id: 0,
    title: 'Create a New Landing UI',
    content: "Choose and Customise a Design on Our Online Logo Maker! Create Your Perfect Brand Logo Fast & Easy.",
    label: {id: 0, name: 'Complete', color: '#008000', backgroundColor: '#e3f4eb'},
    budget: '$225',
    dateStart: '2015-05-16T05:50:06.7199222+07:00',
    dateEnd: '2016-05-16T05:50:06.7199222+07:00', // datetime
    members: [
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
    comments: [
      {id: 0, content: 'Comment of Sang', idUser: 0}
    ],
    attachFile: [
      {urlFile: 'https://freenice.net/wp-content/uploads/2021/08/Anh-avatar-anime-cute-de-thuong-cho-nu.jpg', type: 'image'}
    ],
    join: {
      id: 0,
      name: 'Phạm Minh Sáng',
      avatar: 'https://freenice.net/wp-content/uploads/2021/08/Anh-avatar-anime-cute-de-thuong-cho-nu.jpg',
    },
    author: {
      id: 0,
      name: 'Phạm Minh Sáng',
      avatar: 'https://freenice.net/wp-content/uploads/2021/08/Anh-avatar-anime-cute-de-thuong-cho-nu.jpg',
    },
    status: 'Archive',
    type: {
      id: 2,
      name: 'doneList'
    }
  },
];

function doneList(state = initState, action) {
  switch (action.type) {
    case ADD_ITEM_DONE:
      action.payload.id = state.length;
      return [...state, action.payload];
    case REMOVE_ITEM_DONE:
      const newState = state.filter(value => value.id !== action.id);
      return newState;
    case CHANGE_ITEM_DONE:
      const newState2 = [...state]
      newState2[action.payload.id].title = action.payload.title;
      newState2[action.payload.id].content = action.payload.content;
      return newState2;
    default:
      return state;
  }
}

export default doneList;