import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import  Card  from "../components/Card";
import MovieButton from "../components/MovieButton";
import { withForm } from "../hoc/withFormBuilder";

let formState = {
  movieName: "",
  releaseDate: "",
  category: "",
};

export const AddMovie = ({ form }) => {
  const [responseText, setResponseText] = React.useState("");
  return (

    <Card
      header={<div
        style={{
          fontSize: "3.75rem",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 300,
          lineHeight: 1.2,
          letterSpacing: "-0.00833em",
        }}
      >
        Add movie
      </div>} >
      {responseText.length > 0 && 
        <div
            style={{
              padding: 15
            }}>
          {responseText}
        </div>}
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Pick a Category"
            defaultValue=""
            onChange={(event: SelectChangeEvent) => (formState.category = event.target.value)}
          >
            <MenuItem value="Comedy" >Comedy</MenuItem>
            <MenuItem value="Drama">Drama</MenuItem>
            <MenuItem value="Fantasy">Fantasy</MenuItem>
          </Select>
       </FormControl>
      <div style={{ paddingBottom: "50px" }}></div>
      <div
        style={{
          float: "right",
          marginTop: "-50px",
        }}
      >
        <MovieButton
          primary="true"
          onClick={() => {
            fetch("http://127.0.0.1:8080/movie", {
              method: "post",
              body: JSON.stringify(formState),
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            })
            .then(function(response) {
              return response.json();
            })
            .then(function(data){
              if(data.error)
                setResponseText(data.error);
              else
                setResponseText(data);
            })
            
            formState = {
              movieName: "",
              releaseDate: "",
              category: ""
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
    onChange: ({ target }) => (formState.releaseDate = target.value),
  }
]);
