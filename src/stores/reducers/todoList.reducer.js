import { compose } from "@mui/system";
import {ADD_ITEM_TODO, CHANGE_ITEM_TODO, REMOVE_ITEM_TODO} from "../type";

const initState = [
  {
    id: 0,
    title: 'Brand logo design',
    content: "Choose and Customise a Design on Our Online Logo Maker! Create Your Perfect Brand Logo Fast & Easy.",
    label: {id: 2, name: 'Approved', color: '#afbac7', backgroundColor: '#e6e7ea'},
    budget: '198',
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
      {id: 0, content: 'Comment of Sang', idUser: 0}
    ],
    attachFile: [
      {urlFile: 'https://freenice.net/wp-content/uploads/2021/08/Anh-avatar-anime-cute-de-thuong-cho-nu.jpg', type: 'image'},
      {urlFile: 'https://thao68.com/wp-content/uploads/2022/02/avatar-hero-team-15.jpg', type: 'image'}
    ],
    // join: {
    //   id: 0,
    //   name: 'Phạm Minh Sáng',
    //   avatar: 'https://freenice.net/wp-content/uploads/2021/08/Anh-avatar-anime-cute-de-thuong-cho-nu.jpg',
    // },
    // author: {
    //   id: 0,
    //   name: 'Phạm Minh Sáng',
    //   avatar: 'https://freenice.net/wp-content/uploads/2021/08/Anh-avatar-anime-cute-de-thuong-cho-nu.jpg',
    // },
    // status: 'Archive',
    // type: {
    //   id: 0,
    //   name: 'todoList'
    // }
  },
];

function todoList(state = initState, action) {
  switch (action.type) {
    case ADD_ITEM_TODO:
      action.payload.id = state.length;
      return [...state, action.payload];
    case REMOVE_ITEM_TODO:
      const newState = state.filter(value => value.id !== action.id);
      return newState;
    case CHANGE_ITEM_TODO:
      const newState2 = [...state];
      // Tìm vị trí của gtri cần sửa (findIndex)
      // Tại vị trí cần sửa gán bằng giá trị mới
      newState2[action.payload.id].title = action.payload.title;
      newState2[action.payload.id].content = action.payload.content;
      return newState2;
    default:
      return state;
  }
}

export default todoList;