import { DeleteIcon, StarIcon } from '@chakra-ui/icons';
import { Avatar, Text, Flex, Box, IconButton } from '@chakra-ui/react';
import { IContact } from 'components/types/contacts';
import React from 'react';

type Props = {
  contact: IContact;
};

const ContactsItem = ({ contact }: Props) => {
  return (
    <Flex as='li' justifyContent='space-between' alignItems='center'>
      <Flex alignItems='center' gap={4}>
        <Avatar size='md' name={contact.name} />
        <Box>
          <Text fontSize='md'>{contact.name}</Text>
          <Text fontSize='md'>{contact.number}</Text>
        </Box>
      </Flex>
      <Box>
        <IconButton
          mr={2}
          variant='outline'
          colorScheme='teal'
          aria-label='Favorite'
          icon={<StarIcon />}
        />
        <IconButton
          variant='outline'
          colorScheme='teal'
          aria-label='Delete contact'
          icon={<DeleteIcon />}
        />
      </Box>
    </Flex>
  );
};

export default ContactsItem;
