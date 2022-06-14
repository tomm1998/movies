import React from "react";
import { useParams } from "react-router";
import { MovieFetcher } from "../renderProps/MovieFetcher";
export interface Actor {
  id: string;
  firstName: string;
  lastName: string;
  birhtDate: string;
}
export interface Movie {
  movieName: string;
  actors: Actor[];
  releaseDate: string;
  category: string;
}
export const MovieDetails = () => {
  const params = useParams();
  const DetailsComponent: React.FC<{ movie: Movie }> = ({ movie }) => {
    if (!movie) return null;
    return (
      <>
        <div
          style={{
            height: "700px",
            overflow: "auto",
            padding: "1rem",

            boxShadow:
              "-60px 0px 100px -90px #000000, 60px 0px 100px -90px #000000",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 300,
              lineHeight: 1.2,
            }}
          >
            {movie.movieName}
            <div
              style={{
                fontSize: "2rem",
              }}
            >
              {movie.releaseDate}

            </div>
            <div
              style={{
                fontSize: "2rem",
              }}
            >
              {movie.category}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <MovieFetcher movieId={params.title.split("_").join(" ")}>
      {(movie) => {
        return (
          <>
            <DetailsComponent movie={movie} />{" "}
          </>
        );
      }}
    </MovieFetcher>
  );
};
