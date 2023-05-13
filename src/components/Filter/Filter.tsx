import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { StarIcon, SearchIcon } from '@chakra-ui/icons';
import React from 'react';

type Props = {
  handelFilterChange: Function;
  handelShowFavorite: Function;
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
        <InputLeftAddon children={<SearchIcon />} />
        <Input
          onChange={e => handelFilterChange(e)}
          placeholder='Find contact...'
          size='md'
          focusBorderColor='teal.600'
        />
      </InputGroup>
      <IconButton
        onClick={() => handelShowFavorite()}
        variant='outline'
        colorScheme={showFavorite ? 'teal' : 'black'}
        aria-label='Show favorite'
        icon={<StarIcon />}
      />
    </Flex>
  );
};

export default Filter;
