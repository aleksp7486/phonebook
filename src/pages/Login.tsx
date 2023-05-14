import { Grid, Heading } from '@chakra-ui/react';
import { ReactComponent as Logo } from 'images/logo.svg';

const Login = () => {
  return (
    <Grid gridGap="20px" justifyContent="center" textAlign="center">
      <Heading>Phonebook</Heading>
      <Logo width={200} height={200} fill="teal" />
    </Grid>
  );
};

export default Login;
