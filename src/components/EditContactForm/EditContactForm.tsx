import { EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Input,
  MenuItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { IContact } from 'components/types/contacts';

type Props = {
  contact: IContact;
  handelEditContact: (editedContact: IContact) => Promise<void>;
};

const EditContactForm = ({ contact, handelEditContact }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { name, number } = contact;
  const formik = useFormik({
    initialValues: {
      name,
      number,
    },
    onSubmit: values => {
      const editedContact = {
        ...contact,
        ...values,
      };
      handelEditContact(editedContact);
      onClose();
    },
  });

  return (
    <>
      <MenuItem onClick={onOpen} icon={<EditIcon />}>
        Edit contact
      </MenuItem>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={formik.handleSubmit}>
            <ModalHeader>Edit contact</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Stack spacing={4}>
                <Box>
                  <label htmlFor="name">Name</label>
                  <Input
                    id="name"
                    name="name"
                    type="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    focusBorderColor="teal.300"
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
                    focusBorderColor="teal.300"
                  />
                </Box>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="teal" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditContactForm;
