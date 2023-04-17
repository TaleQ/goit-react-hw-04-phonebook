import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  StyledForm,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (e) => {
      setName(e.target.value);
  };
  const handleNumberChange = (e) => {
      setNumber(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    onSubmit(contact);
    setName('');
    setNumber('');
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const buttonText = 'Add contact';
  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormLabel htmlFor={nameInputId}>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleNameChange}
          id={nameInputId}
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
          value={number}
          onChange={handleNumberChange}
          required
        />
      </FormLabel>
      <FormButton type="submit">{buttonText.toUpperCase()}</FormButton>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
