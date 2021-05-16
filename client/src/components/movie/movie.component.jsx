import { useQuery } from "@apollo/client";
import { getMoviesQuery } from "../../queries/queries";
import "./movie.style.css";

const Movie = () => {
  const { loading, error, data } = useQuery(getMoviesQuery);
  // console.log(data);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Something Went Wrong</p>;

  return data.movies.map((movie) => {
    return <div className="MovieList"><li key={movie.id}>{movie.title}</li></div>;
  });
};

export default Movie;
