import POkemonRequest from "./pokemon-request.js";

export default function initSearch() {
    const buttons = document.querySelectorAll('[data-button]');
    const searchbutton = document.querySelector('[data-search]');
    const containerTypeSearch = document.querySelector('.search-type');


    let index = 0;
    //função para deletar div com a imagem e nome dos pokemons anteriores
    function DeletDiv() {
        const thereIsDivNameInfo = document.querySelector('.pokemon-name-info');
        const thereIsDivImg = document.querySelector('.pokemon-image');
        const thereIsDivError = document.querySelector('.error');
        const display = document.querySelector('.display');

        if (thereIsDivNameInfo) {
            display.removeChild(thereIsDivNameInfo);
        }
        if (thereIsDivImg) {
            display.removeChild(thereIsDivImg);
        }
        if (thereIsDivError) {
            display.removeChild(thereIsDivError)
        }

    }

    //função de requisição dos dados do pokemon, adição ou subtração do valor do contador
    function ChangeCount(event) {
        const thereIsDivTypeSearch = document.querySelector('.type-term');
        if(thereIsDivTypeSearch){
            containerTypeSearch.removeChild(thereIsDivTypeSearch)
        }
        //verificação de qual botão foi clicado
        if (index < 384 && event.target.dataset.button === 'next') {
            index++;
        } else if (index > 1 && event.target.dataset.button === 'previous') {
            index--;
        } else if (index === 384 && event.target.dataset.button === 'next') {
            index = 1;
        } else if ((index === 1 || index === 0) && event.target.dataset.button === 'previous') {
            index = 384
        }
        const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
        POkemonRequest(url)
    }
    //adicionando evento aos botões de proximo e anterior
    buttons.forEach(button => {
        button.addEventListener('click', ChangeCount);
    })

    function SearchBar(event) {
        event.preventDefault();
        const hello = 'tetste';
        //obtendo o valor do campo de texto
        const searchTerm = event.target.parentElement.elements[0].value.toLocaleLowerCase();
        const pokemon = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
        //ativando a função de request com o valor valor de input sendo o v=parametro de pesquisa para a pokedex
        POkemonRequest(pokemon);


    }

    //adiconando evento ao botão de search
    searchbutton.addEventListener('click', SearchBar);
}