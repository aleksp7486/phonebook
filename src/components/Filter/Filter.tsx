import { Box, Input } from '@chakra-ui/react';
import React from 'react';

type Props = {
  handelFilterChange: Function;
};

const Filter = ({ handelFilterChange }: Props) => {
  return (
    <Box py={4}>
      <Input
        onChange={e => handelFilterChange(e)}
        placeholder='Find contact...'
        size='md'
        focusBorderColor='teal.600'
      />
    </Box>
  );
};

export default Filter;
