import {
  Stack,
  Input,
  Button,
  Box,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';
import { useFormik } from 'formik';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

type Props = {};

const LoginForm = (props: Props) => {
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
            focusBorderColor="teal.300"
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
            focusBorderColor="teal.300"
          />
        </InputGroup>
      </Stack>
      <Box w="100%">
        <Button display="block" type="submit" colorScheme="teal" m="auto">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
