import POkemonRequest from "./pokemon-request.js";

let index = 0;
let numberType = 1;

export default function ChangeType(item) {
    const isByType = item.includes('tipo') || item.includes('próximo')|| item.includes('anterior');
    const containerTypeSearch = document.querySelector('.search-type');
    console.log(item)
    console.log('ok')

    function TypeRequest(item, type) {
        const display = document.querySelector('.display');
        const nextButton = document.querySelector('[data-button="next"]');
        const thereIsDivTypeSearch = document.querySelector('.type-term');

        //Obtendo as informações do tipo de pokemon
        const url = `https://pokeapi.co/api/v2/type/${type}`;
        console.log(url)
        const typeUrl = fetch(url);


        // transformando arquivo recebido em json
        typeUrl.then(r => r.json()).then(json => {
            if (!(containerTypeSearch.id == json.name)) {
                index = 0;
                containerTypeSearch.id = json.name;
            }


            //verificação de qual botão foi clicado no indece de escolho do pokemon
            if (index < (json.pokemon.length - 1) && item.includes('próximo')) {
                index++;
            } else if (index > 1 && item.includes('anterior')) {
                index--;
            } else if (index === (json.pokemon.length - 1) && item.includes('próximo')) {
                index = 0;
            } else if (index === 0 && item.includes('anterior')) {
                index = (json.pokemon.length - 1)
            }
            if (thereIsDivTypeSearch) {
                containerTypeSearch.removeChild(thereIsDivTypeSearch)
            }

            const divTypeSearch = document.createElement('div');
            divTypeSearch.setAttribute('class', 'type-term');
            divTypeSearch.innerText = json.name
            containerTypeSearch.append(divTypeSearch);


            const pokemon = json.pokemon[index].pokemon.url;
            POkemonRequest(pokemon);


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

    function ChangeType() {

        if (item.includes('normal')) {
            numberType = 1;
        
        } else if (item.includes('lutador')) {
            numberType = 2;
        
        } else if (item.includes('voador')) {
            numberType = 3;
         
        } else if (item.includes('venenoso')) {
            numberType = 4;
            
        } else if (item.includes('terra')) {
            numberType = 5;
          
        } else if (item.includes('pedra')) {
            numberType = 6;
       
        } else if (item.includes('inseto')) {
            numberType = 7;
        
        } else if (item.includes('fantasma')) {
            numberType = 8;
       
        } else if (item.includes('metal')) {
            numberType = 9;
          
        } else if (item.includes('fogo')) {
            numberType = 10;
          
        } else if (item.includes('água')) {
            numberType = 11;
          
        } else if (item.includes('grama')) {
            numberType = 12;
    
        } else if (item.includes('elétrico')) {
            numberType = 13;
         
        } else if (item.includes('psíquico')) {
            numberType = 14;
      
        } else if (item.includes('gelo')) {
            numberType = 15;
           
        }else if (item.includes('dragão')) {
            numberType = 16;
           
        } else if (item.includes('Sombrio')) {
            numberType = 17;
           
        } else if (item.includes('fada')) {
            numberType = 18;
           
        }
        //verificando se foi pesquisado algum tipo de pokémon,se verifiv=cation for false então não ira permitir a avançar na lista de pokemons.
            TypeRequest(item, numberType)

    }

    function SearchByName() {
        const pokemon = `https://pokeapi.co/api/v2/pokemon/${item.toLocaleLowerCase()}`;
        POkemonRequest(pokemon);
    }
    (isByType) ? ChangeType() : SearchByName()
}