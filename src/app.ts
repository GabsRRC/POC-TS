import express  from "express";
import { listMovies, insertMovies, deleteMovies, updateMovies, moviePlataforms } from "./controller/movie-controller.js";

const server = express();
server.use(express.json());

server.get('/health', (req, res) => {
    res.send('ok');
} )

//GET
server.get('/movies', listMovies);
server.get('/movies/:plataforma', moviePlataforms)

//POST
server.post('/movies', insertMovies);

//DELETE
server.delete('/movies/:id', deleteMovies);

//PUT
server.put('/movies', updateMovies);


server.listen(4000, () => {
    console.log('server up...');
})