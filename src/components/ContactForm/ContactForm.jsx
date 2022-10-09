import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    dispatch(addContact(name, number));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor="name" className={s.label}>
        Name
      </label>
      <input
        className={s.input}
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number" className={s.label}>
        Phone number
      </label>
      <input
        className={s.input}
        type="tel"
        id="number"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={s.submitBtn}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
