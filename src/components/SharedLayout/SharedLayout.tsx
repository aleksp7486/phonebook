import React from 'react';
import { Container, Divider, Flex, Heading, Link } from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';

const SharedLayout: React.FC = () => {
  return (
    <Container>
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Flex as={NavLink} to="/" alignItems="center" gap={2}>
          <Logo fill="teal" width="22px" height="22px" />
          <Heading size="lg">Phonebook</Heading>
        </Flex>
        <Flex as="nav" p={4} gap={3} fontSize="xl">
          <Link as={NavLink} fontWeight={700} to="/">
            Contacts
          </Link>
          <Link as={NavLink} fontWeight={700} to="/login">
            Login
          </Link>
        </Flex>
      </Flex>
      <Divider />
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
