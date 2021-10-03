import '../style.css';
import React, { useState } from 'react';

export default function ToDo(props) {
    const [isInput, setIsInput] = useState(false);
    const [text, setText] = useState(props.text);

    const handleEditText = (text) => {
      setText(text);
    }

    return (
        <li type="none" className={`todo todo_active ${props.isComplete ? 'todo_complete' : 'todo_incomplete'}`}>
        {isInput && 
          <input type="text" className="todo__change-label"
            onChange={(e) => handleEditText(e.target.value)}
            onBlur={(e) => {
              setIsInput(false);
              props.handleEditText(e.target.value);
            }}
            value={text}
            autoFocus
          />
        }
        {!isInput && 
          <div className={`todo__container todo__container_active`}>
            <button className="button todo__button-complete" onClick={() => props.handleComplete(!props.isComplete)}>{props.isComplete ? 'Y' : 'N'}</button>
            <div className="todo__text" onDoubleClick={() => setIsInput(true)}>{text}</div>
            <button className="button todo__button-delete" onClick={props.handleDelete}>&times;</button>
          </div>
        }
      </li>
    )
}