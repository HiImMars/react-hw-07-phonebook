import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  selectorContactsFilter,
} from 'redux/contacts/selectors';
import { deleteContact, getContacts } from 'redux/contacts/operations';

import css from './ContactList.module.css';
import { useEffect } from 'react';
// import { getContacts } from 'api/phonebookApi';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const visibleContacts = useSelector(selectorContactsFilter);
  console.log(contacts);

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
          <p>{name}</p>
          <p>{phone}</p>
          <button
            className={css.buttons}
            value={id}
            onClick={() => handleDeleteContact(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
      {isLoading && <b>Loading...</b>}
      {error && <p>Oppsss Erorr</p>}
    </ul>
  );

  // return (
  //   <ul className={css.list}>
  //     {visibleContacts.map(({ name, number, id }) => {
  //       return (
  //         <ContactListItem
  //           key={id}
  //           id={id}
  //           name={name}
  //           number={number}
  //           onClick={() => handleDeleteContact(id)}
  //         />
  //       );
  //     })}
  //   </ul>
  // );
};
