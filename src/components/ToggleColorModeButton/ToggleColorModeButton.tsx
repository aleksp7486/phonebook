import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

type Props = {};

const ToggleColorModeButton = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <IconButton
        variant="outline"
        onClick={toggleColorMode}
        aria-label="Color mode switcher"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon color="icon" />}
      />
    </header>
  );
};

export default ToggleColorModeButton;
