import { SearchIcon, StarIcon } from '@chakra-ui/icons';
import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  favorite: boolean;
};

const Filter = ({ setFilter, setFavorite, favorite }: Props) => {
  const handelFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((e.target as any).value);
  };
  const toggleFavoriteButton = (): void => {
    setFavorite(prev => !prev);
  };

  return (
    <Flex gap={4} py={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          onChange={e => handelFilterChange(e)}
          placeholder="Find contact..."
          size="md"
          focusBorderColor="teal.300"
        />
      </InputGroup>
      <IconButton
        onClick={() => toggleFavoriteButton()}
        variant="outline"
        isActive={favorite}
        aria-label="Show favorite"
        icon={<StarIcon />}
      />
    </Flex>
  );
};

export default Filter;
