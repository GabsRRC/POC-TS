import { QueryResult } from "pg";
import { connection } from "../database/database.js";
import { Movie, MovieEntity } from "../protocols/Movie";

//GET
async function findMovie () : Promise <QueryResult<MovieEntity>> {
    return connection.query("SELECT * FROM movies");
}

//GET FILTER
async function moviePlataform (plataforma: string) {
    return connection.query(`
    SELECT * FROM movies WHERE plataforma = $1
    `, [plataforma])
}

//POST
async function insertMovie (movie : Movie) : Promise <QueryResult<MovieEntity>> {
    return connection.query(`
    INSERT INTO movies (nome, plataforma, genero, status) VALUES ( $1, $2, $3, $4);
    `, [movie.nome, movie.plataforma, movie.genero, movie.status])
}

//DELETE
async function deleteMovie (id : number) {
    return connection.query(`DELETE FROM movies WHERE id = $1`, [id])
}

//PUT
async function updateMovie(movie : MovieEntity) {
    return connection.query(`UPDATE movies SET status = true , nota = $2 WHERE id = $1` , [movie.id, movie.nota])
}


export {
    findMovie,
    insertMovie,
    deleteMovie,
    updateMovie,
    moviePlataform
}