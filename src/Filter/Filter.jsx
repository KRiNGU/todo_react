import React, { useCallback, useEffect, memo } from 'react';
import '../style.css';
import { editFilter } from '../redux/Filter/slices';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  useEffect(() => localStorage.setItem('filter', filter), [filter]);

  const handleEditFilter = useCallback(
    (filter) => dispatch(editFilter({ filter })),
    [dispatch]
  );

  return (
    <ul className="todos__filters">
      <li className="filter">
        <button
          className={`button filter__button all ${
            filter === 'all' ? 'current' : ''
          }`}
          onClick={() => handleEditFilter('all')}
        >
          All
        </button>
      </li>
      <li className="filter">
        <button
          className={`button filter__button completed ${
            filter === 'completed' ? 'current' : ''
          }`}
          onClick={() => handleEditFilter('completed')}
        >
          Completed
        </button>
      </li>
      <li className="filter">
        <button
          className={`button filter__button incompleted ${
            filter === 'incompleted' ? 'current' : ''
          }`}
          onClick={() => handleEditFilter('incompleted')}
        >
          Incompleted
        </button>
      </li>
    </ul>
  );
};

export default memo(Filter);
