import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const lowerCaseName = name.toLowerCase();

    const isContactExist = contacts.some(
      contact =>
        (contact.name.toLowerCase() === lowerCaseName &&
          contact.phone === number) ||
        contact.phone === number ||
        contact.name.toLowerCase() === lowerCaseName
    );

    isContactExist
      ? alert(
          `Contact with that ${name} or ${number} is already present in the phonebook.`
        )
      : dispatch(addContact({ name: name, phone: number }));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactform}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={contacts.name}
          placeholder="Enter name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={contacts.number}
          placeholder="Enter number..."
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
