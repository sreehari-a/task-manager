import { combineReducers } from "@reduxjs/toolkit";
import TasksReducer from "./task.reducer";

export const rootReducer = combineReducers({
  tasks: TasksReducer,
});
