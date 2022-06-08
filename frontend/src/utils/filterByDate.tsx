import { Movie } from "../components/MovieDetails";

export const filterByDate = (movies: Movie[], from: Date, to: Date): any[] => {
  if (!movies) return [];
  if (!from && !to) return movies;

  return movies.filter((i) => {
    return (
      from &&
      from > new Date(i.releaseDate) &&
      to &&
      to < new Date(i.releaseDate)
    );
  });
};
