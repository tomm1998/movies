import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline,
  Container,
  Box,
  adaptV4Theme,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetails } from "./components/MovieDetails";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { useSearchBarQuery } from "./hooks/SearchBarContext";
import { AddMovieForm } from "./Movie/AddMovie";
import { MovieView } from "./Movie/Views/movie-view";

const theme = createTheme(
  adaptV4Theme({
    palette: {
      primary: {
        main: "#0532FF",
      },
      secondary: {
        main: "#00bfa5",
      },
    },
  })
);

export function App() {
  const { setShow, show } = useSearchBarQuery();
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <div
              style={{
                height: "80px",
                background: "#0532FF",
                padding: "1rem",
                placeSelf: "center center",
                boxShadow:
                  "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
              }}
            >
              <Navbar
                items={[
                  { title: "Movies" },
                  { to: "/movie", label: "MOVIES" },
                  {
                    icon: <Search />,
                    onClick: () =>
                      setShow((show) => !show) as unknown as VoidFunction,
                  },
                ]}
              />
            </div>
            {show && <SearchBar />}
            <Container>
              <Box mt={4} mb={8}>
                <Routes>
                  <Route path={"/add-movie"} element={<AddMovieForm />} />
                  <Route path={"/movie"} element={<MovieView />} />
                  <Route path={"/movie/:title"} element={<MovieDetails />} />
                </Routes>
              </Box>
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}
