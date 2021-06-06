import { useQuery } from '@apollo/client';
import { Divider, Grid, Box, Heading } from '@chakra-ui/react';
// @ts-ignore
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  EmptyMessage,
  ErrorMessage,
  Loading,
  WelcomeMessage,
} from '../components';
import {
  Footer,
  Header,
  ResultItem,
  SearchForm,
  getSearchResultQuery,
  useDebounce,
} from '../modules/home';

export default function Home() {
  const [keyword, setKeyword] = useState('');

  // Update search keyword by the query
  const router = useRouter();
  const search = router?.query?.search?.toString();
  useEffect(() => {
    if (keyword !== search) setKeyword(search);
  }, [search]);

  // GraphQL
  const debounceKeyword = useDebounce(keyword, 1000);
  const { loading: isLoading, error, data: searchResults } = useQuery(
    getSearchResultQuery,
    {
      variables: {
        term: encodeURIComponent(debounceKeyword),
      },
    }
  );

  const handleSearchChange = (value: string) => {
    setKeyword(value);
    const query = !!value ? `?search=${value}` : '/';
    router.replace(query);
  };

  return (
    <Box mx={5}>
      <Head>
        <title>iTunes Viewer</title>
        <meta name="description" content="Awesome search engine for iTunes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <SearchForm value={keyword} onChange={handleSearchChange} />
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
          if (hasError) return <ErrorMessage />;
          if (!hasResults) return <EmptyMessage />;
          return (
            <section>
              <Heading as="h2" my={3} size="md" textAlign="center">
                Search Result
              </Heading>
              <Grid
                justifyContent="center"
                templateColumns={['repeat(auto-fit, minmax(250px, 1fr))']}
                gap={[4]}
              >
                {searchResults.result.results.map(entry => (
                  <ResultItem
                    key={entry.collectionId}
                    artistName={entry.artistName}
                    artworkUrl100={entry.artworkUrl100}
                    collectionId={entry.collectionId}
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
