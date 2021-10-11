import '../../style.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteToDo,
  toggleComplete,
  editToDoText,
} from '../../redux/ToDoList/slices';

const ToDo = (props) => {
  const [isInput, setIsInput] = useState(false);
  const dispatch = useDispatch();

  const handleEditText = (text) => {
    dispatch(editToDoText({ text, id: props.id }));
  };

  const handleDelete = () => {
    dispatch(deleteToDo({ id: props.id }));
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter' || e.code === 'Escape') {
      setIsInput(false);
      handleEditText(props.text);
    }
  };

  return (
    <li
      type="none"
      className={`todo todo_active ${
        props.isComplete ? 'todo_complete' : 'todo_incomplete'
      }`}
    >
      {isInput && (
        <input
          type="text"
          className="todo__change-label"
          onChange={(e) => handleEditText(e.target.value)}
          onBlur={() => {
            setIsInput(false);
            handleEditText(props.text);
            if (!props.text.trim()) {
              handleDelete();
            }
          }}
          onKeyDown={handleKeyDown}
          value={props.text}
          autoFocus
        />
      )}
      {!isInput && (
        <div className={'todo__container todo__container_active'}>
          <button
            className="button todo__button-complete"
            onClick={() => dispatch(toggleComplete({ id: props.id }))}
          >
            {props.isComplete ? 'Y' : 'N'}
          </button>
          <div className="todo__text" onDoubleClick={() => setIsInput(true)}>
            {props.text}
          </div>
          <button className="button todo__button-delete" onClick={handleDelete}>
            &times;
          </button>
        </div>
      )}
    </li>
  );
};

export default ToDo;
