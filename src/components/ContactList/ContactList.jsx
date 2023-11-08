import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredContacts.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, phone }) => (
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
