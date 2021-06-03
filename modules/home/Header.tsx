import Image from 'next/image';
import { Flex, Stack, Center, Heading, Container } from '@chakra-ui/react';
import { ReactElement } from 'react';

type HeaderProps = {
  children?: ReactElement;
};

const Header = ({ children }: HeaderProps) => (
  <Flex
    as="header"
    mb={5}
    direction="row"
    justify="center"
    width={['100%', 'auto']}
  >
    <Stack spacing={2}>
      <Center>
        <Image src="/atom.svg" width="50" height="50" />
        <Heading as="h1" fontSize={['3xl', '5xl']} my={5}>
          iTunes Viewer
        </Heading>
      </Center>
      {children}
    </Stack>
  </Flex>
);

export default Header;
