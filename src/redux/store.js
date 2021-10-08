import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todo from "./ToDoList/slices";
import filter from "./Filter/slices";

const reducer = combineReducers({ todo, filter });

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
});
