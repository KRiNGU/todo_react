import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) ?? [],
};

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteToDo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },
    addToDo: (state, { payload }) => {
      const newToDosArray = state.todos;
      const newToDo = { isComplete: false, ...payload };
      newToDosArray.push(newToDo);
      state.todos = newToDosArray;
    },
    deleteCompletedToDos: (state) => {
      state.todos = state.todos.filter((todo) => todo.isComplete === false);
    },
    toggleComplete: (state, { payload }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    },
    editToDoText: (state, { payload }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, text: payload.text } : todo
      );
    },
  },
});

const { actions, reducer } = todos;

export const {
  deleteToDo,
  addToDo,
  deleteCompletedToDos,
  toggleComplete,
  editToDoText,
} = actions;

export default reducer;
