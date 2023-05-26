import { Flex } from '@chakra-ui/react';
import AuthNav from 'components/AuthNav/AuthNav';
import ToggleColorModeButton from 'components/ToggleColorModeButton';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      py={2}
    >
      <Flex
        as={NavLink}
        to="/"
        alignItems="center"
        gap={1}
        fontWeight={500}
        fontSize="2xl"
      >
        <Logo fill="teal" width="20px" height="20px" />
        Phonebook
      </Flex>
      <Flex gap={4} align={'center'}>
        <AuthNav /> <ToggleColorModeButton />
      </Flex>
    </Flex>
  );
};

export default NavBar;
