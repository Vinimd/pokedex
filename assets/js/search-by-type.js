import AbleButton from "./able-button.js";
import POkemonRequest from "./pokemon-request.js";

export default function InitSearchBytype() {
    const buttonsType = document.querySelectorAll('[data-serach-type]');
    const containerTypeSearch = document.querySelector('.search-type');
    let numberType = 0;
    let index = 0;

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

                //verificação de qual botão foi clicado no indece de escolho do pokemon
                if (index < (json.pokemon.length-1) && event.target.dataset.serachType === 'next') {
                    index++;
                } else if (index > 0 && event.target.dataset.serachType === 'previous') {
                    index--;
                } else if (index === (json.pokemon.length - 1) && event.target.dataset.serachType === 'next') {
                    index = 0;
                } else if (index === 0 && event.target.dataset.serachType === 'previous') {
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
        AbleButton(buttonsType[2],buttonsType[3])
            if (numberType < 18 && event.target.dataset.serachType === 'next-type') {
                numberType++;
            } else if (numberType > 1 && event.target.dataset.serachType === 'previous-type') {
                numberType--;
            } else if (numberType === 18 && event.target.dataset.serachType === 'next-type') {
                numberType = 1;
            } else if ((numberType === 1 || numberType === 0) && event.target.dataset.serachType === 'previous-type') {
                numberType = 18
            }
            TypeRequest(event, numberType)
    }
    buttonsType.forEach(button => {
        button.addEventListener('click', ChangeType)
    })
}