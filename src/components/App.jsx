// import { getContacts } from 'api/phonebookApi';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
// import { useEffect } from 'react';
// import { getContacts } from 'redux/contacts/operations';

export const App = () => {
  // const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(getContacts());
  // }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title head">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Loading...</b>}
      <ContactList />
    </div>
  );
};
