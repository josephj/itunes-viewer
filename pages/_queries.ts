import { gql } from '@apollo/client';

export const getSearchResultQuery = gql`
  query Search($term: String, $country: String) {
    result(term: $term, country: $country)
      @rest(path: "/search?term={args.term}&entity=album&country=AU") {
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
