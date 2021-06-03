import { Box, Flex, CircularProgress, Stack } from '@chakra-ui/react';

type LoadingProps = {
  text?: string;
};

const Loading = ({ text }: LoadingProps) => {
  return (
    <Flex
      direction="column"
      height="300px"
      justify="center"
      align="center"
      width="100%"
    >
      <Stack spacing={5}>
        <CircularProgress size="120px" isIndeterminate color="blue.300" />
        <Box alignItems="center" justifyContent="center" textAlign="center">
          {text || 'Loading...'}
        </Box>
      </Stack>
    </Flex>
  );
};

export default Loading;
