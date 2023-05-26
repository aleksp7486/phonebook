import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormLabel,
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
import { useFormik } from 'formik';
import { IAddFormValues } from 'types/contacts';

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
    onSubmit: async values => {
      await handelAddContact({ ...values });
      onClose();
    },
  });

  return (
    <>
      <Button
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
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    focusBorderColor="teal.300"
                  />
                </FormControl>
                <FormControl id="number">
                  <FormLabel>Number</FormLabel>
                  <Input
                    id="number"
                    name="number"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                    focusBorderColor="teal.300"
                  />
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" mr={3}>
                Save
              </Button>
              <Button onClick={onClose} colorScheme="gray">
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddContactForm;
