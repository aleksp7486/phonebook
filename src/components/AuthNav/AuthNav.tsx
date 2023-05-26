import { Flex, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

type Props = {};

const AuthNav = (props: Props) => {
  return (
    <Flex as="nav" gap={2} fontWeight={500} fontSize="2xl">
      <Link as={NavLink} to="/login">
        Login
      </Link>
      <Link as={NavLink} to="/signUp">
        Sign up
      </Link>
    </Flex>
  );
};

export default AuthNav;
