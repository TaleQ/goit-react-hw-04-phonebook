import { Component } from 'react';
import { Wrapper } from './Common.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Notify } from 'notiflix';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };
  componentDidMount() {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      this.setState(() => ({
      contacts: storedContacts,
    }));
    }
  };
  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };
  componentDidCatch(error) { 
    console.log(error);
  };
  addContact = (contact) => {
    const isContactExists = this.state.contacts.some(
      (existingContact) => existingContact.name === contact.name
    );
    if (isContactExists) {
        Notify.info(`${contact.name} is already in contacts`);
        return
    } 
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  addFilter = (value) => {
    console.log(value);
    this.setState(() => ({
      filter: value,
    }));
  }
  getFiltredContacts = () => this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter));
  deleteContact = (e) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e.target.id),
    }));
  };
  render() {
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>

        <h2>Contacts</h2>
        <Filter contacts={this.state.contacts} onChange={this.addFilter} />
        <ContactList contacts={this.getFiltredContacts} onDeleteBtnClick={this.deleteContact} />
      </Wrapper>
    );
  }
}
