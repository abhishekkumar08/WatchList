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

const addMovieMutation = gql`
  mutation addMovie($id:ID, $title: String, $genre: String, $description: String) {
    addMovie(id:$id,title: $title, genre: $genre, description: $description)
    title
    genre
    description
  }
`;

export { getMoviesQuery, getGenresQuery, addMovieMutation };
