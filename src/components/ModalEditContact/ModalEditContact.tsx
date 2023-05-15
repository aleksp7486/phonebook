import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  MenuItem,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

type Props = {};

const ModalEditContact: React.FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MenuItem onClick={onOpen} icon={<EditIcon />}>
        Edit contact
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
              quibusdam illo iure dignissimos sunt pariatur veritatis nulla hic
              eos cupiditate aliquam assumenda nostrum facilis vel a dolorem.
              Velit, fugiat culpa minus blanditiis nihil explicabo id
              perspiciatis quae vel doloremque nisi ducimus facere quia? Quod
              laboriosam nulla quis placeat fugit eligendi molestiae, aperiam et
              velit iste, labore minus impedit deleniti ullam sunt provident
              laborum illo rerum explicabo! Veritatis id libero quidem illum
              omnis deleniti quaerat illo magni rem, quas ea sit facere
              doloribus. Atque nostrum perspiciatis architecto? Necessitatibus
              nobis animi aspernatur, molestias architecto perferendis aperiam
              earum dolore aliquam laborum totam corrupti!
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEditContact;
