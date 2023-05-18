import axios from 'axios';
import { IAddFormValues } from 'types/contacts';
import { IContact } from 'types/contacts';

const baseUrl = 'https://645cea89e01ac61058971e65.mockapi.io/api/contacts';
// const baseUrl = 'http://localhost:4000/api/contacts';

const getAllContacts = async () => {
  try {
    const request = await axios.get(baseUrl);
    if (request.status === 200) {
      return request.data;
    }
  } catch (error) {
    console.error(error);
  }
};

const getContactById = async (id: string) => {
  try {
    const request = await axios.get(`${baseUrl}/${id}`);
    if (request.status === 200) {
      return request.data;
    }
  } catch (error) {
    console.error(error);
  }
};

const addContact = async ({ name, number }: IAddFormValues) => {
  try {
    const request = await axios.post(baseUrl, {
      name: name,
      number: number,
      favorite: false,
      avatar: '',
    });
    return request.status === 201 ? request.data : false;
  } catch (error) {
    console.error(error);
  }
};

const deleteContact = async (id: string) => {
  try {
    const request = await axios.delete(`${baseUrl}/${id}`);
    return request.status === 200 ? request.data : false;
  } catch (error) {
    console.error(error);
  }
};

const editContact = async (editContact: IContact) => {
  try {
    const request = await axios.put(`${baseUrl}/${editContact.id}`, {
      ...editContact,
    });
    return request.status === 200 ? request.data : false;
  } catch (error) {
    console.error(error);
  }
};

const toggleFavorite = async (id: string) => {
  try {
    const contact = await getContactById(id);
    const request = await axios.put(`${baseUrl}/${contact.id}`, {
      ...contact,
      favorite: !contact.favorite,
    });
    return request.status === 200 ? request.data : false;
  } catch (error) {
    console.error(error);
  }
};

const contactsAPI = {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  editContact,
  toggleFavorite,
};

export default contactsAPI;
