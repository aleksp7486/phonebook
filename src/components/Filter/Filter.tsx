import { Box, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React from 'react';

type Props = {
  handelFilterChange: Function;
};

const Filter = ({ handelFilterChange }: Props) => {
  return (
    <Box py={4}>
      <InputGroup>
        <InputLeftAddon children={<SearchIcon />} />
        <Input
          onChange={e => handelFilterChange(e)}
          placeholder='Find contact...'
          size='md'
          focusBorderColor='teal.600'
        />
      </InputGroup>
    </Box>
  );
};

export default Filter;
