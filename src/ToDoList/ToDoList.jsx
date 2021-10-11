import React, { useEffect, useState } from 'react';
import ToDo from './ToDo/ToDo.jsx';
import '../style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, deleteCompletedToDos } from '../redux/ToDoList/slices.js';

const ToDoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const completedNum = useSelector((state) => state.todo.todos).filter(
    (todo) => todo.isComplete === true
  ).length;
  const filter = useSelector((state) => state.filter.filter);

  let shownTodos = [];
  switch (filter) {
    case 'all':
      shownTodos = todos;
      break;
    case 'completed':
      shownTodos = todos.filter((todo) => todo.isComplete);
      break;
    case 'incompleted':
      shownTodos = todos.filter((todo) => !todo.isComplete);
      break;
    default:
      shownTodos = todos;
      break;
  }

  const [inputToDo, setInputToDo] = useState('');

  const dispatch = useDispatch();
  useEffect(
    () => localStorage.setItem('todos', JSON.stringify(todos)),
    [todos]
  );

  const handleAddToDo = () => {
    const newToDoName = inputToDo.trim();
    if (newToDoName) {
      dispatch(addToDo({ text: newToDoName, id: Date.now() }));
    }
    setInputToDo('');
  };

  const handleClick = (e) => {
    if (e.code === 'Enter') {
      handleAddToDo();
    }
  };

  return (
    <>
      <input
        className="todo__input"
        type="text"
        placeholder="What needs to be done"
        value={inputToDo}
        onChange={(e) => setInputToDo(e.target.value)}
        onKeyDown={handleClick}
      />
      <ul className={`todos ${filter}`}>
        {shownTodos.map((todo) => (
          <ToDo
            key={todo.id}
            text={todo.text}
            id={todo.id}
            isComplete={todo.isComplete}
          />
        ))}
      </ul>
      <footer className="footer">
        <div className="todos__completed">
          Completed: <span className="completed__number">{completedNum}</span>
        </div>
        {completedNum !== 0 && (
          <button
            className="button todo__delete-completed"
            onClick={() => dispatch(deleteCompletedToDos())}
          >
            Delete completed
          </button>
        )}
      </footer>
    </>
  );
};

export default ToDoList;