//tabela do banco
export type MovieEntity = {
    id: number,
    nome: string,
    plataforma: string,
    genero: string,
    status?: boolean | string,
    nota?: string | number
}

export type Movie = Omit<MovieEntity, "id">