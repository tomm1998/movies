import React from "react";
import { Movie } from "../components/MovieDetails";

export const MovieFetcher = ({
  all = false,
  movieId = "",
  children,
  query = "",
}) => {
  const [movies, setMovie] = React.useState([]);

  // on mount
  React.useEffect(() => {
    if (all) {
      fetch("http://127.0.0.1:8080/movie").then((res) => {
        res.json().then((value) => {
          setMovie(value);
        });
      });
    } else {
      fetch("http://127.0.0.1:8080/movie" + "/" + movieId).then((res) => {
        res.json().then((value) => {
          setMovie(value);
        });
      });
    }
  }, []);

  return (
    <>
      {children(
        query && Array.isArray(movies)
          ? (movies as Movie[]).filter((item) => {
              return item.movieName.toLowerCase().includes(query.toLowerCase());
            })
          : movies
      )}
    </>
  );
};
