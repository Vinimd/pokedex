import CreateDivImg from "./div-img.js";
import CreateDivName from "./div-name.js";
import CreateDivType from "./div-type.js";
import CreateDivHW from "./div-height-weight.js";

export default function InitSearchBytype() {
    const buttonsType = document.querySelectorAll('[data-serach-type]');
    const containerTypeSearch = document.querySelector('.search-type')
    let numberType = 0;
    let index = 0;

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

    function POkemonRequest(searchItem) {
        const display = document.querySelector('.display');
        const nextButton = document.querySelector('[data-button="next"]');
        if (searchItem) {
            //Obtendo as informações do pokemon
            const url = searchItem;
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

    function TypeRequest(event, type) {

        const display = document.querySelector('.display');
        const nextButton = document.querySelector('[data-button="next"]');
        const thereIsDivTypeSearch = document.querySelector('.type-term')

            //Obtendo as informações do tipo de pokemon
            const url = `https://pokeapi.co/api/v2/type/${type}`;
            const typeUrl = fetch(url);

            // transformando arquivo recebido em json
            typeUrl.then(r => r.json()).then(json => {
                if(!(containerTypeSearch.id == json.name)){
                    index = 0;
                    containerTypeSearch.id = json.name;
                }
                console.log(json.pokemon.length)
                //verificação de qual botão foi clicado no indece de escolho do pokemon
                if (index < (json.pokemon.length-1) && event.target.dataset.serachType === 'next') {
                    index++;
                } else if (index > 1 && event.target.dataset.serachType === 'before') {
                    index--;
                } else if (index === (json.pokemon.length - 1) && event.target.dataset.serachType === 'next') {
                    index = 0;
                } else if (index === 0 && event.target.dataset.serachType === 'before') {
                    index = (json.pokemon.length - 1)
                }
                if (thereIsDivTypeSearch) {
                    containerTypeSearch.removeChild(thereIsDivTypeSearch)
                }
                const divTypeSearch = document.createElement('div');
                divTypeSearch.setAttribute('class', 'type-term');
                divTypeSearch.innerText = json.name
                containerTypeSearch.append(divTypeSearch);


                const pokemon = json.pokemon[index].pokemon.url
                POkemonRequest(pokemon)


            }).catch(() => {
                //ativando função delete
                DeletDiv();
                //criando uma div para conter a mensagem de erro
                const divError = document.createElement('div');
                divError.setAttribute('class', 'error');
                //atribuindo um valor para o valor interno do html da div
                divError.innerHTML = '<span><strong>Tipo Não Encontrado</strong></span>'
                display.insertBefore(divError, nextButton)

            })
        
    }

    function ChangeType(event) {
 
            if (numberType < 18 && event.target.dataset.serachType === 'next-type') {
                numberType++;
            } else if (numberType > 1 && event.target.dataset.serachType === 'before-type') {
                numberType--;
            } else if (numberType === 18 && event.target.dataset.serachType === 'next-type') {
                numberType = 1;
            } else if ((numberType === 1 || numberType === 0) && event.target.dataset.serachType === 'before-type') {
                numberType = 18
            }
            TypeRequest(event, numberType)
    }
    buttonsType.forEach(button => {
        button.addEventListener('click', ChangeType)
    })
}