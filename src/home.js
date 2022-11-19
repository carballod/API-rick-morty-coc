// Importo la funcion para pedir los personajes
import { getCharacters } from "./services/getData.js";

const container = document.querySelector('#characters');
const loader = document.getElementById('lds-ring');

const charactersList = async () => {
    loader.style.display = 'grid';
    // cambiar pagina de resultados 
    const { results } = await getCharacters(3);
    loader.style.display = 'none';

    results.forEach(character => {
        const article = document.createElement('article');
        article.setAttribute('class', 'character')
        article.innerHTML = `
        <img src= "${character.image}"/>
        <h2>${character.name}</h2>
        <div>
            <p>${character.species}</p>
            <p class="${character.status.toLowerCase()}"></p>
        </div>
        <a href="/#/${character.id}">Ver personaje</a>
        `;
        container.appendChild(article);
    });

    console.log(results);
}

charactersList();

window.addEventListener('hashchange', () => {

    const id = location.hash.slice(1).toLocaleLowerCase().split('/')[1];
    localStorage.setItem('charID', id);
    window.location.replace('/character.html');
});