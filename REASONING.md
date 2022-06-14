# Reasoning

## Tasks you focused on - why
Bugs fixed:
    - The functionality of adding a new movie was not working because in frontend headers was not set in the fetch function, so I added the content-type and the returning of the function. In backend I decided to assume that you can not add two movies with the same name and I used the function push() to add a new movie to the list of movies. I also checked if the movie-name was empty. (1h)
    - The star button, that it is used to add a movie to favorites, duplicated the movie clicked, so I fixed the setState in Movieview. (10 minutes)
    - In the search bar the cancel button was not working because there was no onclick function linked with. I added a funciont that set the state to empty when cancel button is clicked. (5 minutes)
    - I deleted the search button because it was useless. The onChange function on the input component was already working for searching movies. (5 minutes)
    - I wrote tests for backend using jest (30 minutes)

Tools used:
    - Eslint to analyze the code and to find quickly bugs
    - The testing library jest for the backend

Features added:
    - The possibility to add the category of a movie during the adding action using a select component from @mui/material library

Issues faced:
    - First project coded in Typescript

## Tasks you would do later - why

Bugs that I will fix:
    - The filter by date is not working
    - A console error "Cannot update a component (`MovieView`) while rendering a different component (`MovieFetcher`). To locate the bad setState() call inside `MovieFetcher`" that I couldn't fix it but in a real working project I will do it


Features that I will add:
    - Filter movies through category or favorites
    - Add images of movies
    - A registration and a login.
    - Expand the Movie Details with actors of the movie
    - Database
    - Redux as state container

##

## How did you like it?
I really liked this coding challenge because it's been really challenging for me and I've never did something like this. At the beginning it was very difficult to understand and how to fix bugs in the project, but then I found it very challenging and good training for me.

## Where did you struggle?
The backend part was easier than frontend. Frontend has many components and I really struggled at the beginning. Precisely, when I was trying to understand how the movie-view was working.

## How long did it take?
I took like 4 hours and half.