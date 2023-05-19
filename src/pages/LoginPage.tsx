import LoginForm from 'components/LoginForm';
import { IUser } from 'types/user';

const LoginPage = () => {
  const handelSubmit = async (user: IUser) => {};
  return <LoginForm handelSubmit={handelSubmit} />;
};

export default LoginPage;
