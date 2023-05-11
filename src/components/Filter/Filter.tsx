import { Box, Input } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const Filter = (props: Props) => {
  const [value, setValue] = React.useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <Box py={4}>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Find contact...'
        size='md'
        focusBorderColor='teal.600'
      />
    </Box>
  );
};

export default Filter;
