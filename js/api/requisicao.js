export const requisicao = (id) => 
    fetch('https://rickandmortyapi.com/api/character/')
        .then(resp => resp.json())
        .then(json => json)