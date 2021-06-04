import styled from '@emotion/styled';
import Link from 'next/link';
import { Box, Flex, Image, Text, Tooltip } from '@chakra-ui/react';
import { formatDistance } from 'date-fns';

type ResultItemProps = {
  artistName: string;
  artworkUrl100: string;
  collectionName: string;
  collectionId: number;
  releaseDate: string;
  trackName: string;
};

const ResultItem = ({
  artistName,
  artworkUrl100,
  collectionName,
  collectionId,
  releaseDate,
}: ResultItemProps) => (
  <Flex
    flexDirection="column"
    width="100%"
    bg="blackAlpha.100"
    mb={[5, 2]}
    as="figure"
  >
    <Box style={{ position: 'relative' }}>
      <Tooltip label={artistName} aria-label="A tooltip">
        <InfoText
          style={{ position: 'absolute', bottom: 0 }}
          bgColor="blackAlpha.500"
          color="white"
          textAlign="center"
        >
          {artistName}
        </InfoText>
      </Tooltip>
      <Box minH="250px">
        <Link href={`/album/${collectionId}`}>
          <Image
            src={artworkUrl100.replace(/100x100/, '600x600')}
            width="100%"
            borderRadius="md"
          />
        </Link>
      </Box>
    </Box>

    <Tooltip label={collectionName} aria-label="A tooltip">
      <InfoText textAlign="center">{collectionName}</InfoText>
    </Tooltip>
    <Tooltip label={releaseDate} aria-label="A tooltip">
      <InfoText textAlign="center" fontSize={['md', 'xs']}>
        {formatDistance(new Date(releaseDate), new Date())}
      </InfoText>
    </Tooltip>
  </Flex>
);
export default ResultItem;

const InfoText = styled(Text)`
  box-sizing: border-box;
  padding: 3px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;
