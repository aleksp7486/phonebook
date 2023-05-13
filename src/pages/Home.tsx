import { Grid, Heading } from '@chakra-ui/react';
import { ReactComponent as Logo } from 'images/logo.svg';

const Home = () => {
  return (
    <Grid
      paddingTop={100}
      gridGap='20px'
      justifyContent='center'
      textAlign='center'
    >
      <Heading>Phonebook</Heading>
      <Logo width={300} height={300} fill='teal' />
    </Grid>
  );
};

export default Home;
