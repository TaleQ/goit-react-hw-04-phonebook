import PropTypes from 'prop-types';
import { ContactItem, DeleteButton } from './ContactListItem.styled';

export const ContactListItem = ({ contacts, onClick }) => {
  return contacts.map(contact => (<ContactItem key={contact.id}><span>{contact.name}</span><span>{contact.number}</span><DeleteButton id={contact.id} onClick={onClick}>Delete</DeleteButton></ContactItem>));
};

ContactListItem.propTypes = {
  contacts: PropTypes.array,
  onDeleteBtnClick: PropTypes.func
}