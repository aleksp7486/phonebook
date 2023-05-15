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

const Filter: React.FC<Props> = ({
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
        icon={<StarIcon color="currentcolor" />}
      />
    </Flex>
  );
};

export default Filter;
