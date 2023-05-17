import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Input,
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
import { IAddFormValues } from 'components/types/addFormValues';
import { useFormik } from 'formik';

type Props = {
  handelAddContact: (values: IAddFormValues) => Promise<void>;
};

const AddContactForm = ({ handelAddContact }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: values => {
      handelAddContact({ ...values });
      onClose();
    },
  });

  return (
    <>
      <Button
        color="gray.400"
        onClick={onOpen}
        leftIcon={<AddIcon />}
        variant="outline"
        w="100%"
      >
        Add new contact
      </Button>

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
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
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

export default AddContactForm;
