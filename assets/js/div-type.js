export default function CreateDivType(file){
    const div = document.createElement('div');
    div.setAttribute('class', 'pokemon-type');
    div.innerText = 'Type:'
    //obtendo o tipo do pokemon
    const pokemonType = file.types;
    //adicionando o tipo do pokemon na dive
    pokemonType.forEach(item => {
        div.innerHTML += ` <span class = '${item.type.name} type'>${item.type.name}</span>`;
    })
    return div
}