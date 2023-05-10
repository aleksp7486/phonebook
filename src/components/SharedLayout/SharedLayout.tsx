import React from 'react';
import { Box, Container, Divider, Flex, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const SharedLayout: React.FC = () => {
  return (
    <Container>
      <Box as='header'>
        <Flex as='nav' justifyContent='center'>
          <Link as={NavLink} p={3} to='/'>
            Home
          </Link>
          <Divider orientation='vertical' />
          <Link as={NavLink} p={3} to='/contacts'>
            Contacts
          </Link>
        </Flex>
        <Divider />
      </Box>
    </Container>
  );
};

export default SharedLayout;
