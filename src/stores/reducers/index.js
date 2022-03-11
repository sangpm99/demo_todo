import {combineReducers} from "redux";
import todoListReduce from "./todoList.reducer";
import doingListReduce from "./doingList.reducer";
import doneListReduce from "./doneList.reducer";

const rootReducer = combineReducers({
  todoList: todoListReduce,
  doingList: doingListReduce,
  doneList: doneListReduce
});

export default rootReducer;
