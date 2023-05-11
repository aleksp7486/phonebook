import React from 'react';
import { Container, Divider, Flex, Link } from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import Filter from '../Filter/Filter';

const SharedLayout: React.FC = () => {
  return (
    <Container>
      <Flex as='header' w='100%' alignItems='center'>
        <Link display='block' w='30px' h='100%' as={NavLink} to='/'>
          <Logo width='100%' height='100%' />
        </Link>
        <Flex as='nav' p={2} gap={3} fontSize='xl'>
          <Link as={NavLink} to='/home'>
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
