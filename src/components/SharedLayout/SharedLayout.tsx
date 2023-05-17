import React from 'react';
import { Container, Divider, Flex, Link } from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';

const SharedLayout = () => {
  return (
    <Container>
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
        <Flex as="nav" gap={2} fontWeight={500} fontSize="2xl">
          <Link as={NavLink} to="/login">
            Login
          </Link>
          <Link as={NavLink} to="/register">
            Register
          </Link>
        </Flex>
      </Flex>
      <Divider mb={4} />
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
