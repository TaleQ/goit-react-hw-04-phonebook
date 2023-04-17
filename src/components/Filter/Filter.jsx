import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterDiv, FilterInput } from './Filter.styled';

export class Filter extends Component {
  state = {
    filter: '',
  };
  handleChange = e => {
    const value = e.target.value.toLowerCase();
    this.setState({
      filter: value,
    });
    this.props.onChange(value);
  };
  render() {
    const filterInputId = nanoid();
    return (
      <>
        {this.props.contacts.length ? (
          <FilterDiv>
            <label htmlFor={filterInputId}>Find contacts by name</label>
            <FilterInput
              type="text"
              id={filterInputId}
              onChange={this.handleChange}
              value={this.state.filter}
            ></FilterInput>
          </FilterDiv>
        ) : (
            <FilterDiv>
              <p>There are no contacts yet</p>
            </FilterDiv>
        )}
      </>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func,
  contacts: PropTypes.array
};
