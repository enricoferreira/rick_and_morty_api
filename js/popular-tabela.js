const popularCabecalho = (resultados) => 
    Object.keys(resultados[0]).map(coluna => 
        `
        <th>
            ${coluna}
        </th>`
    ).join('')


    const validarConteudo = (key, personagem) =>{
        return key != 'image' ? personagem[key] : `<img style="width: 55px; height: 55px; border-radius: 50%" src="${personagem[key]}"/>`
    }

const popularBody = (resultados) =>
    resultados.map( personagem =>
        `
        <tr>
            ${Object.keys(resultados[0]).map(key => `<td>${validarConteudo(key, personagem)}</td>`).join('')}
        </tr>
        `        
    ).join('');
    

export const selectTable = (elementTable, json) =>{
    const table = document.querySelector(elementTable);
    const thead = document.querySelector(elementTable + ' thead');
    const tbody = document.querySelector(elementTable + ' tbody');    
    
    thead.innerHTML = popularCabecalho(json);
    tbody.innerHTML = popularBody(json);
}