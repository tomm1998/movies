import { Movie } from "../mocks/data/movie";

type MovieWithFavorite = Movie & { favorite: boolean };
export const withFavorite = (items: Movie[]): MovieWithFavorite[] => {
  if (!items) {
    return [];
  }
  return items.map((item) => ({ ...item, favorite: false }));
};
