import axios from 'axios';
import { IUser } from '../types/user';

const baseUrl = 'http://localhost:4000/api/user';

axios.defaults.baseURL = `${baseUrl}`;

const submit = async (user: IUser) => {
  const response = await axios.post('/register', user);
  console.log(response);
};

const userAPI = {
  submit,
};
export default userAPI;
