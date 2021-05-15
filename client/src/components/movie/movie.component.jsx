import { useQuery } from "@apollo/client";
import { getMoviesQuery } from "../../queries/queries";

const Movie = () => {
  const { loading, error, data } = useQuery(getMoviesQuery);
  // console.log(data);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Something Went Wrong</p>;

  return data.movies.map((movie) => {
    return <li key={movie.id}>{movie.title}</li>;
  });
};

export default Movie;
