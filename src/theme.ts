import {
  defineStyleConfig,
  extendTheme,
  type ThemeConfig,
} from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const buttonTheme = defineStyleConfig({
  defaultProps: {
    colorScheme: 'teal',
  },
});

const theme = extendTheme({
  config,
  components: { Button: buttonTheme },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === 'light' ? 'gray.50' : 'gray.800',
      },
    }),
  },
});

export default theme;
