import React from 'react';
import { IContact } from 'components/types/contacts';
import ContactsItem from 'components/ContactsItem';
import { Flex } from '@chakra-ui/react';
import SkeletonContactsList from 'components/SkeletonContactsList';

type Props = {
  contacts: Array<IContact>;
  handelDeleteContact: (id: string) => Promise<void>;
  toggleFavorite: (contact: IContact) => Promise<void>;
  isContactsLoading: boolean;
  editContact: (contact: IContact) => void;
};

const ContactsList = ({ contacts, isContactsLoading, ...rest }: Props) => {
  return (
    <>
      {isContactsLoading ? (
        <SkeletonContactsList />
      ) : (
        <Flex as="ul" flexDirection="column" gap={2}>
          {contacts.map((item: IContact) => {
            return <ContactsItem key={item.id} contact={item} {...rest} />;
          })}
        </Flex>
      )}
    </>
  );
};

export default ContactsList;
