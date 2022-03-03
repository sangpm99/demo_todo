import {combineReducers} from "redux";
import todoListReduce from "./todoList.reducer";
import doingListReduce from "./todoList.reducer";

const rootReducer = combineReducers({
  todoList: todoListReduce,
  doingList: doingListReduce
});

export default rootReducer;
