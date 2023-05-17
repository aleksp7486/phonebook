import { Flex } from '@chakra-ui/react';
import ContactsItem from 'components/ContactsItem';
import SkeletonContactsList from 'components/SkeletonContactsList';
import { IContact } from 'components/types/contacts';

type Props = {
  contacts: Array<IContact>;
  handelDeleteContact: (id: string) => Promise<void>;
  toggleFavorite: (id: string) => Promise<void>;
  isContactsLoading: boolean;
  handelEditContact: (editedContact: IContact) => Promise<void>;
};

const ContactsList = ({ contacts, isContactsLoading, ...rest }: Props) => {
  return (
    <>
      {isContactsLoading ? (
        <SkeletonContactsList />
      ) : (
        <Flex as="ul" flexDirection="column" gap={2} pt={4}>
          {contacts.map((item: IContact) => {
            return <ContactsItem key={item.id} contact={item} {...rest} />;
          })}
        </Flex>
      )}
    </>
  );
};

export default ContactsList;
