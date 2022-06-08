import React, { useState } from "react";
import Button from "../../components/MovieButton";
import { MovieFetcher } from "../../renderProps/MovieFetcher";
import List from "@mui/material/List";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { AcUnitSharp, Add, Star, StarBorder } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { MovieDetails } from "../../components/MovieDetails";
import { Fab } from "@mui/material";
import { Context } from "../../hooks/SearchBarContext";
import { Filter } from "../../components/Filter";
import { filterByDate } from "../../utils/filterByDate";
import { withFavorite } from "../../utils/withFavorite";

export const MovieView = () => {
  const navigate = useNavigate();
  const [moviesAndFavorites, setMovies] = React.useState([]);
  const queryRef = React.useRef("");
  const [dateFilter, setDateFilter] = useState({
    from: undefined,
    to: undefined,
  });
  return (
    <>
      <Context.Consumer>
        {({ query }) => (
          <div
            style={{
              height: "700px",
              overflow: "auto",
              boxShadow:
                "-60px 0px 100px -90px #000000, 60px 0px 100px -90px #000000",
            }}
          >
            <MovieFetcher all query={query}>
              {(movies) => {
                const moviesWithFavorites = withFavorite(movies);
                if (
                  (!moviesAndFavorites.length && moviesWithFavorites.length) ||
                  query != queryRef.current
                ) {
                  setMovies(moviesWithFavorites);
                  queryRef.current = query;
                }
                return (
                  <div>
                    <Filter
                      onChange={(from, to) => {
                        setDateFilter({ from, to });
                      }}
                    />
                    <List>
                      {filterByDate(
                        moviesAndFavorites,
                        dateFilter.from,
                        dateFilter.to
                      ).map((movie) => {
                        return (
                          <div
                            onClick={() => {
                              navigate(
                                "/movie/" + movie.movieName.split(" ").join("_")
                              );
                            }}
                          >
                            <ListItem button>
                              <ListItemIcon>
                                <AcUnitSharp />
                              </ListItemIcon>
                              <ListItemText primary={movie.movieName}>
                                {movie.title}
                              </ListItemText>
                              <ListItemIcon
                                onClick={(e) => {
                                  e.stopPropagation();
                                  movie.favorite = !movie.favorite;
                                  console.log(moviesAndFavorites);
                                  setMovies([
                                    ...moviesAndFavorites.filter(
                                      (m) => m.title == movie.title
                                    ),
                                    movie,
                                  ]);
                                }}
                              >
                                {movie.favorite ? <Star /> : <StarBorder />}
                              </ListItemIcon>
                            </ListItem>
                            <Divider />
                          </div>
                        );
                      })}
                    </List>
                  </div>
                );
              }}
            </MovieFetcher>
            <Fab
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
              }}
              color="primary"
              onClick={() => navigate("/add-movie")}
            >
              <Add />
            </Fab>
          </div>
        )}
      </Context.Consumer>
    </>
  );
};
