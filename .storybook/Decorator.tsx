import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { theme } from '../styles/theme';

export default function Decorator(Story) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Story />
    </ChakraProvider>
  );
}
