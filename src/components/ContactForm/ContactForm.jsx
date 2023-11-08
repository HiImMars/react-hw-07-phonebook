// import { useReducer } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setNumber } from 'redux/contactForm/contactFormSlice';

export const ContactForm = ({ createContact }) => {
  const state = useSelector(state => state.contactForm);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      dispatch(setName(target.value));
    }
    if (target.name === 'number') {
      dispatch(setNumber(target.value));
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    createContact(state);

    reset();
  };

  const reset = () => {
    dispatch(setName(''));
    dispatch(setNumber(''));
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactform}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          required
          onChange={handleChange}
          value={state.name}
          placeholder="Enter name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          required
          onChange={handleChange}
          value={state.number}
          placeholder="Enter number..."
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
