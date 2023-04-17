import { StyledContactList } from "./ContactList.styled";
import { ContactListItem } from "./ContactListItem/ContactListItem";
import PropTypes from "prop-types";

export const ContactList = ({ contacts, onDeleteBtnClick }) => (
  <StyledContactList>
    <ContactListItem contacts={contacts()} onClick={onDeleteBtnClick} />
  </StyledContactList>
);

ContactList.propTypes = {
  contacts: PropTypes.func,
  onDeleteBtnClick: PropTypes.func
}