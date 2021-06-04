import { Divider, Box } from '@chakra-ui/react';
import { Header, Footer } from '../../modules/home';

export default function Album() {
  return (
    <Box mx={5}>
      <Header />
      <Box as="main" my={5}>
        Hello My Album
      </Box>
      <Divider role="separator" />
      <Footer />
    </Box>
  );
}
