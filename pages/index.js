import { gql, useQuery } from '@apollo/client';
import { Container, Divider, Grid, Box, Heading } from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  EmptyMessage,
  ErrorMessage,
  Loading,
  WelcomeMessage,
} from '../components';
import { Header, Footer, ResultItem, SearchForm } from '../modules/home';

const getSearchResultQuery = gql`
  query Search($term: String, $country: String) {
    result(term: $term, country: $country)
      @rest(path: "/search?term={args.term}&country=AU") {
      count: resultCount
      results {
        artistId
        artistViewUrl
        artworkUrl100
        artistName
        collectionId
        collectionName
        previewUrl
        primaryGenreName
        releaseDate
        trackName
        trackId
        trackViewUrl
      }
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  console.log('router', router.query);

  const {
    loading: isLoading,
    error,
    data: searchResults,
  } = useQuery(getSearchResultQuery, {
    variables: {
      term: keyword,
    },
  });

  const handleSearchChange = value => {
    setKeyword(value);
    router.push(`?search=${value}`);
  };
  const handleSearchChangeDebounce = debounce(handleSearchChange, 1000);
  const handleSearchCancel = () => setKeyword('');

  return (
    <Box mx={5}>
      <Head>
        <title>iTunes Viewer</title>
        <meta name="description" content="Awesome search engine for iTunes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <SearchForm
          mb={5}
          onChange={handleSearchChangeDebounce}
          onSubmit={handleSearchChange}
          onCancel={handleSearchCancel}
        />
      </Header>
      <Box as="main" my={5}>
        {(() => {
          // It's a mess if I write using JSX with conditions directly.
          // Thus, I use an anonymous function to achieve it.
          const hasKeyword = !!keyword;
          const hasError = !!error;
          const results = searchResults?.result?.results || [];
          const hasResults = !!results.length;

          if (!hasKeyword) return <WelcomeMessage />;
          if (isLoading) return <Loading />;
          if (hasError) return <ErrorMessage error={error} />;
          if (!hasResults) return <EmptyMessage />;
          return (
            <section>
              <Heading as="h2" my={3} size="md" textAlign="center">
                Search Result
              </Heading>
              <Grid templateColumns={['1fr', 'repeat(4, 1fr)']} gap={[2, 6]}>
                {searchResults.result.results.map(entry => (
                  <ResultItem
                    key={[entry.trackId, entry.artistId].join('-')}
                    artistName={entry.artistName}
                    artworkUrl100={entry.artworkUrl100}
                    collectionName={entry.collectionName}
                    releaseDate={entry.releaseDate}
                    trackName={entry.trackName}
                  />
                ))}
              </Grid>
            </section>
          );
        })()}
      </Box>
      <Divider role="separator" />
      <Footer />
    </Box>
  );
}
