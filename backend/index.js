const express = require('express')
const cors = require('cors')

const PORT = 8080

const app = express()
app.use(cors({ credentials: true }))
app.use(express.json())
app.use(express.urlencoded())

let movieList = [
    {movieName: "Earth",  releaseDate:"15-09-2003"},
    {movieName:"Neptune",releaseDate: "10-11-2000"},
    {movieName:"Mercury",  releaseDate:"10-01-2010"},
    {movieName:"Uranus", releaseDate:"28-02-1994"}
]

app.listen(PORT, () =>
    console.log(`The Movies API is running on: http://localhost:${PORT}.`)
)
app.get('/movie', (_request, response) => {
    return response.json(movieList)
})
app.post('/movie', (request, response) => {
    movieList = movieList + request.body
    return response.json("Movie added successfully")
})
app.get('/movie/:id', (request, response) => {
    return response.json(movieList.filter(movie=>movie.movieName === request.params.id )[0])
})