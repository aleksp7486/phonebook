import { Grid, Heading } from '@chakra-ui/react';
import { ReactComponent as PhonebookImage } from 'images/logo.svg';

const Home = () => {
  return (
    <Grid gridGap='20px' justifyContent='center' textAlign='center'>
      <Heading>Phonebook</Heading>
      <PhonebookImage />
    </Grid>
  );
};

export default Home;
