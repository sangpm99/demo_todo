import {ADD_ITEM_DONE, REMOVE_ITEM_DONE, CHANGE_ITEM_DONE} from "../type";

const addDone = (task) => {
  return {
    type: ADD_ITEM_DONE,
    payload: task,
  }
}

const removeTaskDone = (id) => {
  return {
    type: REMOVE_ITEM_DONE,
    id,
  }
}

const changeTaskDone = (task) => {
  return {
    type: CHANGE_ITEM_DONE,
    payload: task,
  }
}

export {
  addDone,
  removeTaskDone,
  changeTaskDone
}
