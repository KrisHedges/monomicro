import { chakra, Button, extendTheme, ChakraProvider } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

/* eslint-disable-next-line */
export interface ChakraButtonProps {}

const StyledChakraButton = chakra(Button, {
    baseStyle: {
      backgroundColor: "gray",
      color: "white",
      padding: "0.5em 1.5em",
      margin: "0.5em 0",
      fontSize: "1.8em",
      borderRadius: "2em",
      border: "2px solid white"
    },
});

const theme = extendTheme({
  colors: {
    primary: "green"
  }
});

export function ChakraButton(props: ChakraButtonProps) {
  return (
    <ChakraProvider theme={theme}>
      <StyledChakraButton>ChakraButton!</StyledChakraButton>
    </ChakraProvider>
  );
}

export default ChakraButton;
