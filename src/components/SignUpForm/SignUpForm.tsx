import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { InputControl, SubmitButton } from 'formik-chakra-ui';
import { Formik } from 'formik';
import * as yup from 'yup';
import { IUser } from '../../types/user';
import { NavLink } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Mail is required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.'),
});

type Props = {
  handelSubmit: (user: IUser) => Promise<void>;
  isSubmitSuccess: boolean;
};

const SignUpForm = ({ handelSubmit, isSubmitSuccess }: Props) => {
  const onSubmit = async (values: IUser) => {
    await handelSubmit(values);
  };
  return (
    <Flex minH={'100vh'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          {!isSubmitSuccess ? (
            <>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={schema}
              >
                {({ handleSubmit, values, errors }) => (
                  <Stack as="form" onSubmit={handleSubmit as any} spacing={4}>
                    <InputControl
                      name="email"
                      label="Email address"
                      isRequired
                    />
                    <InputControl
                      inputProps={{ type: 'password' }}
                      name="password"
                      label="Password"
                      isRequired
                    />
                    <Stack spacing={10} pt={2}>
                      <SubmitButton>Sign up</SubmitButton>
                    </Stack>
                  </Stack>
                )}
              </Formik>
              <Box pt={6}>
                <Text align={'center'}>
                  Already a user?{' '}
                  <Link as={NavLink} to="/login" color={'teal.400'}>
                    Login
                  </Link>
                </Text>
              </Box>
            </>
          ) : (
            <Text fontSize="2xl" textAlign={'center'}>
              Thanks for your registration, please check your inbox!
              <Link as={NavLink} to="/login" color={'teal.400'}>
                Login
              </Link>
            </Text>
          )}
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUpForm;
