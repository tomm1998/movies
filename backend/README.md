# Backend documentation
The REST api offers `movie` endpoint available at PORT 8080.

#### How to build and run the application
1. `cd backend`
2. `npm i`
3. `npm start`

#### REST Api examples
- list of movies is available at `curl http://127.0.0.1:8080/movie`
- fetching one movie is available at `curl http://127.0.0.1:8080/movie/<movie name>`

#### Current problems
- Unfortunately, currently it's not possible to add a new movie
- No existing tests to test these endpoints