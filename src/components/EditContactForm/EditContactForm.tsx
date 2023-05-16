import { Stack, Input, Button, Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useFormik } from 'formik';
import { IContact } from 'components/types/contacts';
import api from 'services/contactsAPI';

type Props = {
  contactToEdit: IContact;
  editContact: Function;
  onClose: () => void;
};

const EditContactForm: React.FC<Props> = ({
  contactToEdit: contact,
  editContact,
  onClose,
}: Props) => {
  const { name, number } = contact;
  const formik = useFormik({
    initialValues: {
      name,
      number,
    },
    onSubmit: async values => {
      const editedContact = {
        ...contact,
        name: values.name,
        number: values.number,
      };

      const response = await api.editContact(editedContact);
      editContact(response);
      onClose();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={4} mb={16}>
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
      <Flex w="100%" justifyContent="flex-end">
        <Button type="submit" colorScheme="blue" mr={3}>
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </Flex>
    </form>
  );
};

export default EditContactForm;
