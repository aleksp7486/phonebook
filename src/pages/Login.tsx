import { Flex } from '@chakra-ui/react';
import { ReactComponent as Logo } from 'images/logo.svg';
import LoginForm from 'components/LoginForm';

const Login = () => {
  return (
    <>
      <Flex justifyContent="center" w="100" py={8}>
        <Logo width={160} height={160} fill="teal" />
      </Flex>
      <LoginForm />
    </>
  );
};

export default Login;
