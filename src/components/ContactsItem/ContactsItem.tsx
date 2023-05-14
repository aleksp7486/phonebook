import {
  DeleteIcon,
  HamburgerIcon,
  InfoIcon,
  PhoneIcon,
  StarIcon,
} from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import ModalEditContact from 'components/ModalEditContact/ModalEditContact';
import { IContact } from 'components/types/contacts';
import React from 'react';

type Props = {
  contact: IContact;
  handelDeleteContact: Function;
  toggleFavorite: Function;
};

const ContactsItem: React.FC<Props> = ({
  contact,
  handelDeleteContact,
  toggleFavorite,
}: Props) => {
  const { name, number, favorite } = contact;
  return (
    <Flex as='li' justifyContent='space-between' alignItems='center'>
      <Flex alignItems='center' gap={4}>
        <Avatar size='md' name={name} />
        <Box>
          <Text fontSize='md' noOfLines={1}>
            <InfoIcon boxSize={3} mr={1} />
            {name}
          </Text>
          <Text fontSize='md' noOfLines={1}>
            <PhoneIcon boxSize={3} mr={1} />
            {number}
          </Text>
        </Box>
      </Flex>
      <Flex alignItems='center'>
        {!favorite || (
          <Box color='yellow.400' px={4}>
            <StarIcon fill='currenColor' />
          </Box>
        )}
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <MenuItem
              onClick={() => toggleFavorite(contact)}
              icon={<StarIcon />}
            >
              Favorite
            </MenuItem>
            <ModalEditContact />
            <MenuItem
              onClick={() => handelDeleteContact(contact.id)}
              icon={<DeleteIcon />}
            >
              Delete contact
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default ContactsItem;
