import AddContactForm from 'components/AddContactForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import React, { useEffect, useState } from 'react';
import api from 'services/contactsAPI';
import { IAddFormValues, IContact } from 'types/contacts';

const ContactsPage: React.FC = () => {
  const [contacts, setContacts] = useState<Array<IContact> | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    const getContacts = async () => {
      setIsLoading(true);
      const data = await api.getAllContacts();
      setContacts(data);
      setIsLoading(false);
    };
    getContacts();
  }, []);

  const handelFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((e.target as any).value);
  };

  const filterContacts = (contacts: IContact[] | []): IContact[] | [] => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toString().includes(filter.toString())
    );
  };

  const filteredContacts = filterContacts(contacts);

  const handelShowFavorite = (): void => {
    setFavorite(!favorite);
  };

  const showFavoriteContacts = (contacts: IContact[] | []): IContact[] | [] => {
    return filteredContacts.filter(contact => contact.favorite);
  };

  const favoriteContacts = showFavoriteContacts(filteredContacts);

  const toggleFavorite = async (id: string): Promise<void> => {
    const data = await api.toggleFavorite(id);
    if (!data) {
      return;
    }
    const updatedContacts: IContact[] | [] = contacts.map(contact => {
      if (contact.id === data.id) {
        contact.favorite = data.favorite;
        return contact;
      }
      return contact;
    });
    setContacts(updatedContacts);
  };

  const handelAddContact = async (values: IAddFormValues) => {
    const data: IContact = await api.addContact(values);
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

  return (
    <>
      <Filter
        handelFilterChange={handelFilterChange}
        handelShowFavorite={handelShowFavorite}
        showFavorite={favorite}
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
