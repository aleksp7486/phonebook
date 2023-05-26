import { Container, Divider } from '@chakra-ui/react';
import NavBar from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <NavBar />
      <Divider />
      <Outlet />
    </Container>
  );
};

export default Layout;
