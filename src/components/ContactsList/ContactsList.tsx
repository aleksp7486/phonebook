import React from 'react';
import { IContact } from 'components/types/contacts';
import ContactsItem from 'components/ContactsItem';
import { Flex } from '@chakra-ui/react';

type Props = {
  contacts: Array<IContact>;
  handelDeleteContact: Function;
  toggleFavorite: Function;
};

const ContactsList: React.FC<Props> = ({ contacts, ...rest }: Props) => {
  return (
    <Flex as='ul' flexDirection='column' gap={2}>
      {contacts.map((item: IContact) => {
        return <ContactsItem key={item.id} contact={item} {...rest} />;
      })}
    </Flex>
  );
};

export default ContactsList;
