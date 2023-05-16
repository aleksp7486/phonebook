import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  MenuItem,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import EditContactForm from 'components/EditContactForm';
import { IContact } from 'components/types/contacts';

type Props = {
  contactToEdit: IContact;
  editContact: (contact: IContact) => void;
};

const EditContactModal = ({ contactToEdit, editContact }: Props) => {
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
              editContact={editContact}
              contactToEdit={contactToEdit}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditContactModal;
