import axios from 'axios';

const baseUrl = 'https://645cea89e01ac61058971e65.mockapi.io/api/contacts';
export const getAllContacts = async () => {
  try {
    const request = await axios.get(baseUrl);
    if (request.status === 200) {
      return request.data;
    }
  } catch (error) {
    console.error(error);
  }
};

const contactsAPI = {
  getAllContacts,
};

export default contactsAPI;
