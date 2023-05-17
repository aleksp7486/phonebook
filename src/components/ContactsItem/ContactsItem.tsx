import { DeleteIcon, HamburgerIcon, StarIcon } from '@chakra-ui/icons';
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
import EditContact from 'components/EditContactForm';
import { IContact } from 'components/types/contacts';

type Props = {
  contact: IContact;
  handelDeleteContact: (id: string) => Promise<void>;
  toggleFavorite: (id: string) => Promise<void>;
  handelEditContact: (editedContact: IContact) => Promise<void>;
};

const ContactsItem = ({
  contact,
  handelDeleteContact,
  toggleFavorite,
  ...restProps
}: Props) => {
  const { id, name, number, avatar, favorite } = contact;
  return (
    <Flex as="li" justifyContent="space-between" alignItems="center">
      <Flex alignItems="center" gap={4}>
        <Avatar src={avatar} size="md" name={name} />
        <Box>
          <Text fontSize="md" noOfLines={1}>
            {name}
          </Text>
          <Text fontSize="md" noOfLines={1}>
            {number}
          </Text>
        </Box>
      </Flex>
      <Flex alignItems="center">
        {!favorite || (
          <Box px={4} color="yellow.400">
            <StarIcon fill="currenColor" />
          </Box>
        )}
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem onClick={() => toggleFavorite(id)} icon={<StarIcon />}>
              Favorite
            </MenuItem>
            <EditContact contact={contact} {...restProps} />
            <MenuItem
              onClick={() => handelDeleteContact(id)}
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
