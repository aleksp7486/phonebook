import React from 'react';
import { Container, Divider, Flex, Heading, Link } from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';

const SharedLayout: React.FC = () => {
  return (
    <Container>
      <Flex
        as='header'
        justifyContent='space-between'
        alignItems='center'
        w='100%'
      >
        <Link as={NavLink} to='/' display='flex' alignItems='flex-end' gap={2}>
          <Logo fill='teal' width='30px' height='30px' />{' '}
          <Heading size='lg'>Phonebook</Heading>
        </Link>
        <Flex as='nav' p={4} gap={3} fontSize='xl'>
          <Link as={NavLink} fontWeight={700} to='/'>
            Home
          </Link>
          <Link as={NavLink} fontWeight={700} to='/contacts'>
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
