import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { StarIcon, SearchIcon } from '@chakra-ui/icons';
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
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          onChange={e => handelFilterChange(e)}
          placeholder="Find contact..."
          size="md"
          // focusBorderColor="teal.500"
        />
      </InputGroup>
      <IconButton
        onClick={() => handelShowFavorite()}
        variant="outline"
        isActive={showFavorite}
        aria-label="Show favorite"
        color="yellow.400"
        icon={<StarIcon color="currentcolor" />}
      />
    </Flex>
  );
};

export default Filter;
