import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { filterContacts } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const newFilter = e.target.value.toLowerCase().trim();
    dispatch(filterContacts(newFilter));
  };

  return (
    <>
      <label className={css.filterlabel}>
        Find contacts by name
        <input
          className={css.filterinput}
          type="text"
          onChange={handleChange}
          placeholder="Filter by name..."
        ></input>
      </label>
    </>
  );
};
