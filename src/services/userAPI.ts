import axios from 'axios';
import { IUser } from '../types/user';

const baseUrl = 'http://localhost:4000/api/user';

axios.defaults.baseURL = `${baseUrl}`;

const submit = async (user: IUser) => {
  const response = await axios.post('/register', user);
  if (response.status === 201) {
    return response.data.user;
  } else {
    return false;
  }
};

const userAPI = {
  submit,
};
export default userAPI;
