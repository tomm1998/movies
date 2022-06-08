import { Movie } from "../mocks/data/movie";

type MoveWithFavorite = Movie & { favorite: boolean };
export const withFavorite = (items: Movie[]): MoveWithFavorite[] => {
  if (!items) {
    return [];
  }
  return items.map((item) => ({ ...item, favorite: false }));
};
