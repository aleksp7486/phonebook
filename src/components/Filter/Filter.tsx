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
  handelFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handelShowFavorite: () => void;
  showFavorite: boolean;
};

const Filter = ({
  handelFilterChange,
  handelShowFavorite,
  showFavorite,
}: Props) => {
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
        onClick={() => handelShowFavorite()}
        variant="outline"
        isActive={showFavorite}
        aria-label="Show favorite"
        icon={<StarIcon />}
      />
    </Flex>
  );
};

export default Filter;
