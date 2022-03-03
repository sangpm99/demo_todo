import {ADD_ITEM_DOING, REMOVE_ITEM_DOING, CHANGE_ITEM_DOING} from "../type";

const initState = [
  {id: 0, title: 'What is Lorem Ipsum?', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
  {id: 1, title: 'Why do we use it?', content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
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
      return [...state, action.payload];
    default:
      return state;
  }
}

export default doingList;
