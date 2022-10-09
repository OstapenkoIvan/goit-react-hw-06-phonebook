import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter.jsx';
import s from './App.module.css';
import ContactList from './ContactList/ContactList';

/**
 * TODO add error boundaries
 * TODO use MaterialUI for components design
 */

function App() {
  return (
    <Container>
      <h1 className={s.mainHeader}>Phonebook</h1>
      <ContactForm />

      <section>
        <h2 className={s.addHeader}>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </Container>
  );
}

export default App;
