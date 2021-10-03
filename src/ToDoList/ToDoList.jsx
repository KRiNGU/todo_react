import React, { useEffect, useState } from 'react';
import ToDo from '../ToDo/ToDo.jsx';
import '../style.css';

export default function ToDoList(props) {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);
    const [inputToDo, setInputToDo] = useState('');
    const [completedNum, setCompletedNum] = useState(todos.reduce((prevState, todo) => todo.isComplete ? prevState + 1 : prevState, 0));

    useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)));

    const handleEditToDoText = (id, text) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, text} : todo));
    }

    const handleDeleteToDo = (id) => { 
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleComplete = (id, newIsComplete) => {
        if (newIsComplete)  {
            setCompletedNum((prevState) => prevState + 1);
        } else {
            setCompletedNum((prevState) => prevState - 1)
        }
        setTodos(todos.map(todo => todo.id === id ? {...todo, isComplete: newIsComplete} : todo));
    }

    const handleAddToDo = () => {
        const newToDoName = inputToDo.trim();
        if (newToDoName !== '') {
            const newToDo = {text: newToDoName, isComplete: false, id: Date.now()};
            setTodos(prevState => ([...prevState, newToDo]));
        }
        setInputToDo('');
    }

    const handleClick = (e) => {
        if (e.code === 'Enter') {
            handleAddToDo();
        }
    }

    const handleDeleteCompleted = () => {
        setTodos(todos.filter(todo => todo.isComplete === false));
        setCompletedNum(0);
    }

    return(
        <>
            <input
                className="todo__input"
                type="text"
                placeholder="What needs to be done"
                value={inputToDo}
                onChange={(e) => setInputToDo(e.target.value)}
                onKeyDown={handleClick}
            />
            <ul type="none" className={`todos ${props.currentFilter === 'all' 
                                                ? '' : props.currentFilter === 'completed' 
                                                ? 'todos_completed' : 'todos_incompleted'}`
                                      }
            >
                {todos.map((todo, index) => (
                    <ToDo
                        key={todo.id}
                        text={todo.text}
                        isComplete={todo.isComplete}
                        handleComplete={(isComplete) => handleComplete(todo.id, isComplete)}
                        handleDelete={() => handleDeleteToDo(todo.id)}
                        handleEditText={(text) => handleEditToDoText(todo.id, text)}
                    />) 
                )}
            </ul>
            <footer className="footer">
                <div className="todos__completed">
                Completed: <span className="completed__number">{completedNum}</span>
                </div>
                {completedNum !== 0 && (
                    <button className="button todo__delete-completed" onClick={handleDeleteCompleted}>Delete completed</button>
                )}
            </footer>
        </>
    )
}