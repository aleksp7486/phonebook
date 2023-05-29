import AddContactForm from 'components/AddContactForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { useEffect, useState } from 'react';
import api from 'services/contactsAPI';
import { IAddFormValues, IContact } from 'types/contacts';

const ContactsPage = () => {
  const [contacts, setContacts] = useState<Array<IContact> | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    const getContacts = async () => {
      setIsLoading(true);
      const data = await api.getAllContacts();
      if (!data) {
        setIsLoading(false);
        return;
      }
      setContacts(data);
      setIsLoading(false);
    };
    getContacts();
  }, []);

  const toggleFavorite = async (id: string): Promise<void> => {
    const data = await api.toggleFavorite(id);
    if (!data) {
      return;
    }
    const contactsToUpdate: IContact[] | [] = contacts.map(contact => {
      if (contact.id === data.id) {
        contact.favorite = data.favorite;
        return contact;
      }
      return contact;
    });
    setContacts(contactsToUpdate);
  };

  const handelAddContact = async (formData: IAddFormValues) => {
    const data: IContact = await api.addContact(formData);
    if (!data) {
      return;
    }
    setContacts([...contacts, data]);
  };

  const handelDeleteContact = async (id: string) => {
    const data: IContact = await api.deleteContact(id);
    if (!data) {
      return;
    }
    const contactsToUpdate = contacts.filter(contact => contact.id !== data.id);
    setContacts(contactsToUpdate);
  };

  const handelEditContact = async (editedContact: IContact) => {
    const data: IContact = await api.editContact(editedContact);
    if (!data) {
      return;
    }
    const contactsToUpdate: IContact[] = contacts.map(contact => {
      if (contact.id === data.id) {
        return data;
      }
      return contact;
    });
    setContacts(contactsToUpdate);
  };

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toString().includes(filter.toString())
  );

  const favoriteContacts = filteredContacts.filter(contact => contact.favorite);

  return (
    <>
      <Filter
        setFilter={setFilter}
        setFavorite={setFavorite}
        favorite={favorite}
      />
      <AddContactForm handelAddContact={handelAddContact} />
      <ContactsList
        contacts={favorite ? favoriteContacts : filteredContacts}
        handelDeleteContact={handelDeleteContact}
        toggleFavorite={toggleFavorite}
        isContactsLoading={isLoading}
        handelEditContact={handelEditContact}
      />
    </>
  );
};

export default ContactsPage;
