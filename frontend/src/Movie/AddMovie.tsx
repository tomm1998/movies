import React from "react";
import { Card } from "../components/Card";
import MovieButton from "../components/MovieButton";
import { withForm } from "../hoc/withFormBuilder";

var formState = {
  movieName: "",
  date: "",
};

export const AddMovie = ({ form }) => {
  return (
    <Card
      header={
        <div
          style={{
            fontSize: "3.75rem",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            lineHeight: 1.2,
            letterSpacing: "-0.00833em",
          }}
        >
          Add movie
        </div>
      }
    >
      <div
        style={{
          fontSize: "3.75rem",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 300,
          lineHeight: 1.2,
          letterSpacing: "-0.00833em",
        }}
      ></div>
      {form}
      <div style={{ paddingBottom: "50px" }}></div>
      <div
        style={{
          float: "right",
          marginTop: "-50px",
        }}
      >
        <MovieButton
          primary
          onClick={() => {
            fetch("http://127.0.0.1:8080/movie", {
              method: "post",
              body: JSON.stringify(formState),
            });
            formState = {
              movieName: "",
              date: "",
            };
          }}
          label={`Submit ${formState.movieName}`}
        />
      </div>
    </Card>
  );
};

export const AddMovieForm = withForm(AddMovie, [
  {
    type: "text",
    label: "Movie Name",
    onChange: ({ target }) => (formState.movieName = target.value),
  },
  {
    type: "date",
    label: "Movie Release Date",
    onChange: ({ target }) => (formState.date = target.value),
  },
]);
