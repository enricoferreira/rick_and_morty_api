import { requisicao } from './api/requisicao.js';
import { selectTable } from './popular-tabela.js';
import { generateChart } from './chart.js'

requisicao().then(json => {
    console.log(json.results);
    
    const jsonFiltrado = json.results.map(element => {
        console.log(element);
        
        return {
            id: element.id,
            name: element.name,
            status: element.status,
            species: element.species,
            gender: element.gender,
            origin: element.origin.name,
            image: element.image,
            episode: element.episode.length
        }
    });
    selectTable('#table-personagem', jsonFiltrado);
    generateChart('.ct-chart', jsonFiltrado);
})