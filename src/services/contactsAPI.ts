import axios from 'axios';
import { IContact } from 'components/types/contacts';

const baseUrl = 'https://645cea89e01ac61058971e65.mockapi.io/api/contacts';
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

const deleteContact = async (id: string) => {
  try {
    const request = await axios.delete(`${baseUrl}/${id}`);
    return request.status === 200 ? request.data : false;
  } catch (error) {
    console.error(error);
  }
};

const toggleFavorite = async (contact: IContact) => {
  try {
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
  deleteContact,
  toggleFavorite,
};

export default contactsAPI;