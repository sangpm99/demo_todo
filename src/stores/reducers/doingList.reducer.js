import { compose } from "@mui/system";
import {ADD_ITEM_DOING, CHANGE_ITEM_DOING, REMOVE_ITEM_DOING} from "../type";

const initState = [
  {
    id: 0,
    title: 'Create a Blog Template UI',
    content: "Choose and Customise a Design on Our Online Logo Maker! Create Your Perfect Brand Logo Fast & Easy.",
    label: {id: 1, name: 'Pending', color: '#e8b65f', backgroundColor: '#fbf2e2'},
    budget: '$125',
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
      }
    ],
    comments: [
      {id: 0, content: 'ABCD', idUser: 12}
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
      id: 1,
      name: 'doingList'
    }
  },
];

function doingList(state = initState, action) {
  switch (action.type) {
    case ADD_ITEM_DOING:
      action.payload.id = state.length;
      return [...state, action.payload];
    case REMOVE_ITEM_DOING:
      const newState = state.filter(value => value.id !== action.id);
      return newState;
    case CHANGE_ITEM_DOING:
      const newState2 = [...state]
      newState2[action.payload.id].title = action.payload.title;
      newState2[action.payload.id].content = action.payload.content;
      return newState2;
    default:
      return state;
  }
}

export default doingList;