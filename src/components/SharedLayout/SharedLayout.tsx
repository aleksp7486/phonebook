import React from 'react';
import { Container, Divider, Flex, Heading, Link } from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';

const SharedLayout: React.FC = () => {
  return (
    <Container>
      <Flex as='header' alignItems='center' w='100%'>
        <Link as={NavLink} to='/' display='flex' alignItems='flex-end' gap={2}>
          <Logo fill='teal' width='25px' height='25px' />{' '}
          <Heading size='md'>Phonebook</Heading>
        </Link>
        <Flex as='nav' p={4} gap={3} fontSize='xl'>
          <Link as={NavLink} to='/'>
            Home
          </Link>
          <Link as={NavLink} to='/contacts'>
            Contacts
          </Link>
        </Flex>
      </Flex>
      <Divider />

      <Outlet />
    </Container>
  );
};

export default SharedLayout;
