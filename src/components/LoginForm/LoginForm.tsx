import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Link,
  Checkbox,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import { useState } from 'react';
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik';
import { IUser } from '../../types/user';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { EmailIcon, LockIcon } from '@chakra-ui/icons';

type Props = {
  handelSubmit: (user: IUser) => Promise<void>;
};

const LoginForm = ({ handelSubmit }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      await handelSubmit(values);
    },
  });
  return (
    <Flex minH={'100vh'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword(showPassword => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'teal.400'}>Forgot password?</Link>
                </Stack>
                <Button>Sign in</Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginForm;
