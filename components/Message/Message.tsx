import { Flex, Image, Stack, Text } from '@chakra-ui/react';

type Props = {
  iconSrc: string;
  iconSize?: number;
  text: string;
};

const Message = ({ iconSize, iconSrc, text }: Props) => (
  <Stack spacing={5}>
    <Flex height="300" alignItems="center">
      <Image
        src={iconSrc}
        width={iconSize || 200}
        height={iconSize || 200}
        mx="auto"
      />
    </Flex>
    <Text fontSize="xs" textAlign="center">
      {text}
    </Text>
  </Stack>
);

export default Message;
