import React from 'react';
import { Box } from '@chakra-ui/react';
import Message from './Message';
import EmptyMessage from './EmptyMessage';
import ErrorMessage from './ErrorMessage';
import WelcomeMessage from './WelcomeMessage';

// @ts-ignore
import imgAtom from '../../public/atom.svg';

export default {
  title: 'Message',
};

export const basic = () => (
  <Box p={4}>
    <Message iconSrc={imgAtom} text="Hello World" />
  </Box>
);

export const emptyMessage = () => (
  <Box p={4}>
    <EmptyMessage />
  </Box>
);

export const errorMessage = () => (
  <Box p={4}>
    <ErrorMessage />
  </Box>
);

export const welcomeMessage = () => (
  <Box p={4}>
    <WelcomeMessage />
  </Box>
);
