import { Component } from 'react';
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import { StyledForm, FormLabel, FormInput, FormButton } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = ({target:{name, value}}) => {
    this.setState(() => ({
        [name]: value,
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number
    }
    this.props.onSubmit(contact);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const nameInputId = nanoid();
    const numberInputId = nanoid();
    const buttonText = 'Add contact';
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <FormLabel htmlFor={nameInputId}>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </FormLabel>
        <FormLabel htmlFor={numberInputId}>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={numberInputId}
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </FormLabel>
        <FormButton type="submit">{buttonText.toUpperCase()}</FormButton>
      </StyledForm>
    );
  }
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
