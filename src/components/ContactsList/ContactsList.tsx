import React from 'react';
import { IContact } from 'components/types/contacts';
import ContactsItem from 'components/ContactsItem';
import { Flex } from '@chakra-ui/react';

type Props = {
  contacts: Array<IContact>;
};

const ContactsList = ({ contacts }: Props) => {
  return (
    <Flex as='ul' flexDirection='column' gap={2}>
      {contacts.map((item: IContact) => {
        return <ContactsItem key={item.id} contact={item} />;
      })}
    </Flex>
  );
};

export default ContactsList;
