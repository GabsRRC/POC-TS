import { Request, Response } from "express";
import { findMovie, insertMovie, deleteMovie, updateMovie, moviePlataform } from "../repositories/movie-repository.js";
import { Movie, MovieEntity } from "../protocols/Movie.js";
import { MovieSchema } from "../schemas/movie-schema.js";

// GET
async function listMovies(req:Request, res: Response) {
;
    const resultado = await findMovie();
    
    return res.send(resultado.rows);
}

//GET FILTER

async function moviePlataforms(req: Request, res: Response) {
    try {
        const {plataforma} = req.params

        const resultado = await moviePlataform(String(plataforma));
    
        return res.send(resultado.rows);

    } catch {
        return res.sendStatus(500);
    }
}

// POST
async function insertMovies (req: Request, res: Response) {

    const newMovie = req.body as Movie;

    const {error} = MovieSchema.validate(newMovie)
    if (error) {
        return res.status(400).send({
            message: error.message
        })
    }

     const resultado = await insertMovie(newMovie);

    return res.send(`Movie inserted ${resultado.rowCount}`)
}

//DELETE
async function deleteMovies(req:Request, res: Response) {
    try {

        const {id} = req.params

        await deleteMovie(Number(id));

        return res.status(204).send("deletado");

    } catch{
        return res.sendStatus(500);
    }
}

//PUT
async function updateMovies(req:Request, res: Response) {
    try{

        const update = req.body as MovieEntity

        await updateMovie(update)

        return res.status(200).send("atualizado");

    } catch {
        return res.sendStatus(500)
    }
}


export {
    listMovies,
    insertMovies,
    deleteMovies,
    updateMovies,
    moviePlataforms
}