import {ADD_ITEM_TODO, REMOVE_ITEM_TODO, CHANGE_ITEM_TODO} from "../type";

const addTodo = (task) => {
  return {
    type: ADD_ITEM_TODO,
    payload: task,
  }
}

const removeTaskTodo = (id) => {
  return {
    type: REMOVE_ITEM_TODO,
    id,
  }
}

const changeTaskTodo = (task) => {
  return {
    type: CHANGE_ITEM_TODO,
    payload: task,
  }
}

export {
  addTodo,
  removeTaskTodo,
  changeTaskTodo
}
