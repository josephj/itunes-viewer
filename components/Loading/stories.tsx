import React from 'react';
import { Box } from '@chakra-ui/react';
import Component from './index';

export default {
  title: 'Loading',
};

export const basic = () => (
  <Box p={4}>
    <Component />
  </Box>
);

export const text = () => (
  <Box p={4}>
    <Component text="Hello World" />
  </Box>
);
