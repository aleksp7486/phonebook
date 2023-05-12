import axios from 'axios';

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
    console.log(`baseUrl/${id}`);
    const request = await axios.delete(`${baseUrl}/${id}`);
    return request.status === 200 ? request.data : false;
  } catch (error) {
    console.error(error);
  }
};

const contactsAPI = {
  getAllContacts,
  deleteContact,
};

export default contactsAPI;
