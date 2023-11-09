import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { deleteContact, getContacts } from 'redux/contacts/operations';

import { useEffect } from 'react';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, phone }) => (
        <li className={css.item} key={id}>
          <div className={css.contactInfo}>
            <p className={css.name}>{name}</p>
            <p className={css.phone}>{phone}</p>
          </div>
          <button
            className={css.button}
            value={id}
            onClick={() => handleDeleteContact(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
      {isLoading && <p className={css.loader}>Loading, please wait</p>}
      {error && <p>Oppsss Erorr</p>}
    </ul>
  );
};
