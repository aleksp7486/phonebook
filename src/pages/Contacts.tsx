import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { IContact } from 'components/types/contacts';
import React, { useEffect, useState } from 'react';
import api from 'services/contactsAPI';

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState<Array<IContact> | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    const getContacts = async () => {
      setIsLoading(true);
      const fetchedContacts = await api.getAllContacts();
      setContacts(fetchedContacts);
      setIsLoading(false);
    };
    getContacts();
  }, []);

  const handelFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((e.target as any).value);
  };

  const filterContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toString().includes(filter.toString())
    );
  };

  const filteredContacts = filterContacts();

  const handelShowFavorite = () => {
    setFavorite(!favorite);
  };

  const showFavoriteContacts = () => {
    return filteredContacts.filter(contact => contact.favorite);
  };

  const favoriteContacts = showFavoriteContacts();

  const handelDeleteContact = async (id: string) => {
    const response = await api.deleteContact(id);
    if (response) {
      const updatedContacts = contacts.filter(
        contact => contact.id !== response.id
      );
      setContacts(updatedContacts);
    } else {
      return;
    }
  };

  const toggleFavorite = async (contact: IContact) => {
    const response = await api.toggleFavorite(contact);
    if (response) {
      const updatedContacts = contacts.map(contact => {
        if (contact.id === response.id) {
          contact.favorite = response.favorite;
          return contact;
        }
        return contact;
      });
      setContacts(updatedContacts);
    } else {
      return;
    }
  };

  const handelEditContact = (editedContact: IContact) => {
    const updatedContacts = contacts.map(contact => {
      if (contact.id === editedContact.id) {
        return editedContact;
      }
      return contact;
    });
    setContacts(updatedContacts);
  };

  return (
    <>
      <Filter
        handelFilterChange={handelFilterChange}
        handelShowFavorite={handelShowFavorite}
        showFavorite={favorite}
      />
      <ContactsList
        contacts={!favorite ? filteredContacts : favoriteContacts}
        handelDeleteContact={handelDeleteContact}
        toggleFavorite={toggleFavorite}
        isContactsLoading={isLoading}
        editContact={handelEditContact}
      />
    </>
  );
};

export default Contacts;
