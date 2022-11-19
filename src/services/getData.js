//Declaramos una URL base que es la de la API

const baseURL = 'https://rickandmortyapi.com/api';

const getCharacter = async (id) => {

    const res = await fetch(baseURL + '/character/' + id);
    const data = await res.json();

    return data;
}


/**
 * Funcion asincrona que realiza una peticion a la API 
 * con el fin de traer los personajes
 * 
 * @param page - # de pagina
 * @return lista de 20 personajes
 */

const getCharacters = async (page) => {

    const res = await fetch(baseURL + '/character?page=' + page);
    const data = await res.json();

    return data;
}

export  { getCharacters, getCharacter };