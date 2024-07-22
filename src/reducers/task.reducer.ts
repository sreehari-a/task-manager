import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filter, Task } from "../components/TaskCard/types";

type TaskState = {
  tasks: Task[];
  filter: Filter<Task>;
};

const initialState: TaskState = {
  tasks: [],
  filter: {},
};

export const tasksSlice = createSlice({
  name: "taskApp",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ task: Task }>) => {
      state.tasks = [...state.tasks, action.payload.task];
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: string; task: Task }>
    ) => {
      state.tasks = state.tasks.map((item) => {
        if (action.payload.id === item.id) {
          return action.payload.task;
        }
        return item;
      });
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setFilter: (state, action: PayloadAction<{ filter: Filter<Task> }>) => {
      state.filter = action.payload.filter;
    },
    resetFilter: (state) => {
      state.filter = {};
    },
  },
});

export const { addTask, updateTask, deleteTask, setFilter, resetFilter } = tasksSlice.actions;

const TasksReducer = tasksSlice.reducer;
export default TasksReducer;
