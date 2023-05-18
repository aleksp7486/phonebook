import LoginForm from 'components/LoginForm';
import { IUser } from 'types/user';

const Login = () => {
  const handelSubmit = async (user: IUser) => {};
  return <LoginForm handelSubmit={handelSubmit} />;
};

export default Login;
