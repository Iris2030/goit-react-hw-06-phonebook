import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import Container from './Components/Container/Container';
import s from './App.module.css';




function App({contacts}) {

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <Form />

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList

      />
    </Container>
  );
}


const makeStateToProps = (state) =>({
    contacts: state.contacts,

})

export default connect(makeStateToProps,null)(App)