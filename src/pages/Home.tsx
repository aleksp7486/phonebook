import { Grid, Heading } from '@chakra-ui/react';
import { ReactComponent as Logo } from 'images/logo.svg';

const Home = () => {
  return (
    <Grid
      paddingTop={200}
      gridGap='20px'
      justifyContent='center'
      textAlign='center'
    >
      <Heading>Phonebook</Heading>
      <Logo fill='teal' />
    </Grid>
  );
};

export default Home;
