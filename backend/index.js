const express = require('express')
const cors = require('cors')
const PORT = 8080

const app = express()
app.use(cors({ credentials: true }))
app.use(express.json())
app.use(express.urlencoded())

let movieList = [
    {movieName: "Earth" , releaseDate:"15-09-2003", category: "Drama", actors: [
        {id: "01",
        firstName: "Johnny",
        lastName: "Depp",
        birthDate: "10-07-1966"},
        {id: "02",
        firstName: "Angelina",
        lastName: "Jolie",
        birthDate: "10-07-1966"}
    ]},
    {movieName:"Neptune", releaseDate: "10-11-2000", category: "Action"},
    {movieName:"Mercury", releaseDate:"10-01-2010", category: "Comedy"},
    {movieName:"Uranus" , releaseDate:"28-02-1994", category: "Drama"}
]

app.listen(PORT, () =>
    console.log(`The Movies API is running on: http://localhost:${PORT}.`)
)
app.get('/movie', (_request, response) => {
    return response.json(movieList)
})
app.post('/movie',(request, response) => {
    //assuming two movies can't have the same name
    if(!request.body || !request.body.movieName || request.body.movieName==""){
        return response.status(400).send({ error: 'Movie name can not be empty!' });
    }
    console.log(request.body);
    if(!movieList.some(e => e.movieName === request.body.movieName)){
        movieList.push(request.body);
        console.log("Movie added successfully")
        return response.json("Movie added successfully")
    }
    console.log("Movie already added");
    return response.json("Movie already added");
    
})
app.get('/movie/:id', (request, response) => {
    return response.json(movieList.filter(movie=>movie.movieName === request.params.id )[0])
})

module.exports = app