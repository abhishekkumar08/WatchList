import { gql } from "@apollo/client";

const getMoviesQuery = gql`
  {
    movies {
      title
      genre
      description
      id
    }
  }
`;

const getGenresQuery = gql`
  {
    genres {
      genre
      id
    }
  }
`;

export { getMoviesQuery, getGenresQuery };
