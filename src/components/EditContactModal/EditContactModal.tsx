import { EditIcon } from '@chakra-ui/icons';
import {
  MenuItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import EditContactForm from 'components/EditContactForm';
import { IContact } from 'components/types/contacts';

type Props = {
  contact: IContact;
  handelEditContact: (editedContact: IContact) => void;
};

const EditContactModal = ({ contact, handelEditContact }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MenuItem onClick={onOpen} icon={<EditIcon />}>
        Edit contact
      </MenuItem>

      <Modal
        id="editContactModal"
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <EditContactForm
              onClose={onClose}
              handelEditContact={handelEditContact}
              contact={contact}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditContactModal;
