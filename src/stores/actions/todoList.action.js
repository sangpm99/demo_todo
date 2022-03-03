import {ADD_ITEM_TODO, REMOVE_ITEM_TODO} from "../type";

const addTodo = (task) => {
  return {
    type: ADD_ITEM_TODO,
    payload: task,
  }
}

const removeTask = (id) => {
  return {
    type: REMOVE_ITEM_TODO,
    id,
  }
}

export {
  addTodo,
  removeTask,
}
