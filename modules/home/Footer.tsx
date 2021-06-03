import { Stack, Link, StackDivider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Footer = () => (
  <Stack
    as="footer"
    direction={['column', 'row']}
    my={5}
    spacing={[2, 5]}
    justify="center"
    divider={<StackDivider borderColor="gray.50" />}
    fontSize={['xs', 'sm']}
    textAlign={['center', 'left']}
  >
    <Link href="https://www.linkedin.com/in/josephj6802" isExternal>
      LinkedIn
      <ExternalLinkIcon mx={1} />
    </Link>
    <Link href="https://github.com/josephj/itunes-viewer" isExternal>
      Github Repo
      <ExternalLinkIcon mx={1} />
    </Link>
    <Link href="https://itunes-viewer.vercel.app/" isExternal>
      Production Site
      <ExternalLinkIcon mx={1} />
    </Link>
    <Link
      href="https://www.evernote.com/shard/s110/client/snv?noteGuid=ae3e5bda-0e65-45ee-93fb-727025d9b2eb&noteKey=6586d98960f4ce579a61e1ded824c80b&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs110%2Fsh%2Fae3e5bda-0e65-45ee-93fb-727025d9b2eb%2F6586d98960f4ce579a61e1ded824c80b&title=Joseph%2527s%2BPortfolio"
      isExternal
    >
      Portfolio
      <ExternalLinkIcon mx={1} />
    </Link>
  </Stack>
);

export default Footer;
