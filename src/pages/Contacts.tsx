import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { useEffect, useState } from 'react';
import api from 'services/contactsAPI';

type Props = {};

const Contacts = (props: Props) => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    api.getAllContacts().then(data => setContacts(data));
  }, []);
  return (
    <>
      <Filter />
      <ContactsList contacts={contacts} />
    </>
  );
};

export default Contacts;
