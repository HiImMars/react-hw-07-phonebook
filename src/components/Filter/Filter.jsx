import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterContacts } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = ({ target: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(filterContacts(normalizedValue));
  };

  return (
    <>
      <label className={css.filterlabel}>
        Find contacts by name
        <input
          className={css.filterinput}
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Filter by name..."
        ></input>
      </label>
    </>
  );
};
