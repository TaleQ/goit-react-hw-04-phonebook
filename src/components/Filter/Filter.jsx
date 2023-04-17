import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterDiv, FilterInput } from './Filter.styled';

export const Filter = ({ onChange, contacts }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleChange = e => {
    const value = e.target.value.toLowerCase();
    setFilterValue(value);
    onChange(value);
  };

  const filterInputId = nanoid();
  return (
        <FilterDiv>
          <label htmlFor={filterInputId}>Find contacts by name</label>
          <FilterInput
            type="text"
            id={filterInputId}
            onChange={handleChange}
            value={filterValue}
          ></FilterInput>
        </FilterDiv>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
