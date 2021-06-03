import { Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
  iconSrc: string;
  iconSize?: number;
  text: string;
};

const Message = ({ iconSize, iconSrc, text }: Props) => (
  <Flex
    direction="column"
    height="300px"
    justify="center"
    align="center"
    width="100%"
  >
    <Stack spacing={5}>
      <Image src={iconSrc} width={iconSize || 200} height={iconSize || 200} />
      <Text fontSize="xs">{text}</Text>
    </Stack>
  </Flex>
);

export default Message;
