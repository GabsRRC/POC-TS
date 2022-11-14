import Joi from "joi";

export const MovieSchema = Joi.object({
    nome: Joi.string().required(),
    plataforma: Joi.string().required(),
    genero: Joi.string().required(),
    status: Joi.boolean() || Joi.string(),
    nota: Joi.string() || Joi.number
})