import { Link, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

type Props = {};

const SignUpSuccess = () => {
  <Text fontSize="2xl" textAlign={'center'}>
    Thanks for your registration, please check your inbox!
    <Link as={NavLink} to="/login" color={'teal.400'}>
      Login
    </Link>
  </Text>;
};

export default SignUpSuccess;
