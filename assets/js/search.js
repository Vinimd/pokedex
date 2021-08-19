import CreateDivImg from "./div-img.js";
import CreateDivName from "./div-name.js";
import CreateDivType from "./div-type.js";
import CreateDivHW from "./div-height-weight.js";

export default function initSearch() {
    const buttons = document.querySelectorAll('[data-button]');
    const searchbutton = document.querySelector('[data-search]');

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

    function Request(searchItem) {
        const display = document.querySelector('.display');
        const nextButton = document.querySelector('[data-button="next"]');
        if (searchItem) {
            //Obtendo as informações do pokemon
            const url = `https://pokeapi.co/api/v2/pokemon/${searchItem}`;
            const pokemon = fetch(url);

            // transformando arquivo recebido em json
            pokemon.then(r => r.json()).then(json => {
                
                //Ativando a função de delete da div
                DeletDiv();

                //criando uma div para conter o nome do pokemon
                const divName = CreateDivName(json);
                //adicionando a div a pagina
                display.insertBefore(divName, nextButton);

                //criando div com o para conter o tipo do pokemon
                const divType = CreateDivType(json);
                //adicionando a div
                divName.append(divType);

                //criando div para conter os valores de altura e peso do pokemon
                const divHW = CreateDivHW(json);
                divType.append(divHW);

                const divImg = CreateDivImg(json);
                display.insertBefore(divImg, divName);

            }).catch(() => {
                //ativando função delete
                DeletDiv();
                //criando uma div para conter a mensagem de erro
                const divError = document.createElement('div');
                divError.setAttribute('class', 'error');
                //atribuindo um valor para o valor interno do html da div
                divError.innerHTML = '<span><strong>Pokemon Não Encontrado</strong></span>'
                display.insertBefore(divError, nextButton)

            })
        }
    }
    //função de requisição dos dados do pokemon, adição ou subtração do valor do contador
    function ChangeCount(event) {
        //verificação de qual botão foi clicado
        if (index < 384 && event.target.dataset.button === 'next') {
            index++;
        } else if (index > 1 && event.target.dataset.button === 'before') {
            index--;
        } else if (index === 384 && event.target.dataset.button === 'next') {
            index = 1;
        } else if (index === 1 && event.target.dataset.button === 'before') {
            index = 384
        }
        Request(index)
    }
    //adicionando evento aos botões de proximo e anterior
    buttons.forEach(button => {
        button.addEventListener('click', ChangeCount);
    })

    function SearchBar(event) {
        event.preventDefault();
        //obtendo o valor do campo de texto
        const searchTerm = event.target.parentElement.elements[0].value;
        //ativando a função de request com o valor valor de input sendo o v=parametro de pesquisa para a pokedex
        Request(searchTerm);


    }

    //adiconando evento ao botão de search
    searchbutton.addEventListener('click', SearchBar);
}