import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

const ToggleColorModeButton = () => {
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
