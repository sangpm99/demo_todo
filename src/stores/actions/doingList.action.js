import {ADD_ITEM_DOING, REMOVE_ITEM_DOING, CHANGE_ITEM_DOING} from "../type";

const addDoing = (task) => {
  return {
    type: ADD_ITEM_DOING,
    payload: task,
  }
}

const removeTaskDoing = (id) => {
  return {
    type: REMOVE_ITEM_DOING,
    id,
  }
}

const changeTaskDoing = (task) => {
  return {
    type: CHANGE_ITEM_DOING,
    payload: task,
  }
}

export {
  addDoing,
  removeTaskDoing,
  changeTaskDoing
}
