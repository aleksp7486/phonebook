import { Input } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const Filter = (props: Props) => {
  const [value, setValue] = React.useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Find contact'
        size='sm'
      />
    </>
  );
};

export default Filter;
