const server = require('./index.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('movies endpoints', () => {
    it('GET /movies should show all movies', async () => {
        const res = await requestWithSupertest.get('/movie');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));;
    });

    it('GET /movie/:id should show a movie', async () => {
        const res = await requestWithSupertest.get('/movie/earth');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));;
    });

    it('POST /movie should add a movie', async () => {
        const movie = {movieName: "Blues brothers", date: "1980"}
        const res = await requestWithSupertest.post('/movie').send(movie);
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        
    });

    

});