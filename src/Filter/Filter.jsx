import React from 'react';
import '../style.css';

export default function Filter(props) {
    localStorage.setItem('filter', props.currentFilter);

    return (
        <ul className="todos__filters">
        <li className="filter">
          <button 
            className={`button filter__button all ${props.currentFilter === 'all' ? 'current' : ''}`}
            onClick={() => props.handleToggleFilter('all')}
          >All</button>
        </li>
        <li className="filter">
          <button 
            className={`button filter__button completed ${props.currentFilter === 'completed' ? 'current' : ''}`}
            onClick={() => props.handleToggleFilter('completed')}
          >Completed</button>
        </li>
        <li className="filter">
          <button 
            className={`button filter__button incompleted ${props.currentFilter === 'incompleted' ? 'current' : ''}`}
            onClick={() => props.handleToggleFilter('incompleted')}
          >Incompleted</button>
        </li>
      </ul>
    );
}