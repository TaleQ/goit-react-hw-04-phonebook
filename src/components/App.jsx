import { useState, useEffect } from 'react';
import { Wrapper, Thumb } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Notify } from 'notiflix';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts.length) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    const isContactExists = contacts.some(
      (existingContact) => existingContact.name === contact.name
    );
    if (isContactExists) {
        Notify.info(`${contact.name} is already in contacts`);
        return
    }
    setContacts([...contacts, contact]);
  };

  const addFilter = (value) => setFilterValue(value);

  const getFiltredContacts = () => contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));

  const deleteContact = (e) => setContacts(contacts.filter(contact => contact.id !== e.target.id));
  return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact}/>

      <h2>Contacts</h2>
      {contacts.length ? (<Filter contacts={contacts} onChange={addFilter} />) : null}
      {contacts.length ? (<ContactList contacts={getFiltredContacts} onDeleteBtnClick={deleteContact} />) : (<Thumb><p>There are no contacts yet</p></Thumb>)}
      </Wrapper>
    );
}
