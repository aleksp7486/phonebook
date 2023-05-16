import React from 'react';
import { Container, Divider, Flex, Text, Link } from '@chakra-ui/react';
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
          <Logo fill="teal" width="24px" height="24px" />
          <Text fontWeight={500} fontSize="3xl">
            Phonebook
          </Text>
        </Flex>
        <Flex as="nav" gap={2} fontWeight={500} fontSize="xl">
          <Link as={NavLink} to="/">
            Contacts
          </Link>
          <Link as={NavLink} to="/login">
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
