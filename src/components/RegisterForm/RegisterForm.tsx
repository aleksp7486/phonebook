import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Box,
} from '@chakra-ui/react';
import { useFormik } from 'formik';

type Props = {};

const RegisterForm = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {},
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={4} mb={8}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="gray.300" />
          </InputLeftElement>
          <Input
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <LockIcon color="gray.300" />
          </InputLeftElement>
          <Input
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </InputGroup>
      </Stack>
      <Box w="100%">
        <Button display="block" type="submit" colorScheme="blue" m="auto">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default RegisterForm;
