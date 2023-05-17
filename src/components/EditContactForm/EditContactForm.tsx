import { Box, Button, Flex, Input, Stack } from '@chakra-ui/react';
import { IContact } from 'components/types/contacts';
import { useFormik } from 'formik';

type Props = {
  contact: IContact;
  handelEditContact: (editedContact: IContact) => void;
  onClose: () => void;
};

const EditContactForm = ({ contact, handelEditContact, onClose }: Props) => {
  const { name, number } = contact;
  const formik = useFormik({
    initialValues: {
      name,
      number,
    },
    onSubmit: async values => {
      const editedContact = {
        ...contact,
        ...values,
      };
      handelEditContact(editedContact);
      onClose();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={4} mb={8}>
        <Box>
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Box>
        <Box>
          <label htmlFor="number">Number</label>
          <Input
            id="number"
            name="number"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.number}
          />
        </Box>
      </Stack>
      <Flex w="100%" justifyContent="center">
        <Button type="submit" colorScheme="blue" mr={3}>
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </Flex>
    </form>
  );
};

export default EditContactForm;
