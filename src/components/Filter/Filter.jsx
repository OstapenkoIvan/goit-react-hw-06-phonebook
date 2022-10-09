import React from 'react';
import s from './Filter.module.css';
import { getFilter } from '../../redux/selectors.js';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterData } from '../../redux/filterSlice';

const Filter = () => {
  const searchValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const setFilter = evt => {
    const filterData = evt.target.value;
    dispatch(setFilterData(filterData));
  };

  return (
    <div className={s.thumb}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={searchValue}
          onChange={setFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
