import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';

type Props = {
  iconSrc: string;
  iconSize?: number;
  text: string;
};

const Message = ({ iconSize, iconSrc, text }: Props) => (
  <Stack spacing={5}>
    <Flex height="500" justifyContent="center" flexDirection="column">
      <Image
        src={iconSrc}
        width={iconSize || 200}
        height={iconSize || 200}
        mx="auto"
      />
      <Box my={4}>
        <Text fontSize="md" textAlign="center">
          {text}
        </Text>
      </Box>
    </Flex>
  </Stack>
);

export default Message;
