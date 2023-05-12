import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { IContact } from 'components/types/contacts';
import { useEffect, useState } from 'react';
import api from 'services/contactsAPI';

type Props = {};

const Contacts = (props: Props) => {
  const [contacts, setContacts] = useState<Array<IContact>>([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const getContacts = async () => {
      const fetchedContacts = await api.getAllContacts();
      setContacts(fetchedContacts);
    };
    getContacts();
  }, []);

  const handelFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFilter(newValue);
  };

  const filterContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toString().includes(filter.toString()),
    );
  };

  const handelDeleteContact = async (id: string) => {
    const response = await api.deleteContact(id);
    if (!id) {
      return;
    } else {
      const updatedContacts = contacts.filter(
        contact => contact.id !== response.id,
      );
      setContacts(updatedContacts);
    }
  };

  const filteredContacts = filterContacts();

  return (
    <>
      <Filter handelFilterChange={handelFilterChange} />
      <ContactsList
        contacts={filteredContacts}
        handelDeleteContact={handelDeleteContact}
      />
    </>
  );
};

export default Contacts;
