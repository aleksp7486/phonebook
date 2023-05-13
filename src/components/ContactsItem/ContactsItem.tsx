import { DeleteIcon, HamburgerIcon, StarIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Text,
  Flex,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { IContact } from 'components/types/contacts';
import React from 'react';

type Props = {
  contact: IContact;
  handelDeleteContact: Function;
  toggleFavorite: Function;
};

const ContactsItem = ({
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
            {name}
          </Text>
          <Text fontSize='md' noOfLines={1}>
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
              Add to favorite
            </MenuItem>
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
