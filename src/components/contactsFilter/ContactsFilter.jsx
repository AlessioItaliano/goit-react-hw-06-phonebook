import { useDispatch, useSelector } from 'react-redux';
import { setFilterContacts } from '../../redax/filterSlice';

import {
  ContactsFilterForm,
  ContactsFilterLabel,
  ContactsFilterInput,
} from './ContactsFilter.styled';

const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.filter);

  const filterContacts = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setFilterContacts(normalizedValue));
  };

  return (
    <ContactsFilterForm>
      <ContactsFilterLabel>Find contact by name</ContactsFilterLabel>
      <ContactsFilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={filterContacts}
      />
    </ContactsFilterForm>
  );
};

export default ContactsFilter;
