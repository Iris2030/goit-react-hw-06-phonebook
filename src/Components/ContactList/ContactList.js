import ContactListItem from "../ContactListItem/ContactListItem";
import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";


function ContactList({ contacts }) {

  

  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}


ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};



const makeStateToProps = (state) =>{
const {contacts, filter} = state
const filteredContacts = contacts.filter(contact =>{
// console.log( contact.name);
  return contact.name.toLowerCase().includes(filter.toLowerCase())
}
  
);
 return{  contacts: filteredContacts}
}


export default connect(makeStateToProps)(ContactList)