import CreateDivImg from "./div-img.js";
import CreateDivName from "./div-name.js";
import CreateDivType from "./div-type.js";
import CreateDivHW from "./div-height-weight.js";
import DeletDiv from "./delete-div.js";

export default function POkemonRequest(searchItem) {
  const display = document.querySelector(".display");
  const nextButton = document.querySelector('[data-button="next"]');
  if (searchItem) {
    // Obtendo as informações do pokemon
    const url = searchItem;
    const pokemon = fetch(url);

    // transformando arquivo recebido em json
    pokemon
      .then((r) => r.json())
      .then((json) => {
        // Ativando a função de delete da div
        DeletDiv();

        // criando uma div para conter o nome do pokemon
        const divName = CreateDivName(json);
        // adicionando a div a pagina
        display.insertBefore(divName, nextButton);

        // criando div com o para conter o tipo do pokemon
        const divType = CreateDivType(json);
        // adicionando a div
        divName.append(divType);

        // criando div para conter os valores de altura e peso do pokemon
        const divHW = CreateDivHW(json);
        divType.append(divHW);

        const divImg = CreateDivImg(json);
        display.insertBefore(divImg, divName);
      })
      .catch(() => {
        // ativando função delete
        DeletDiv();
        // criando uma div para conter a mensagem de erro
        const divError = document.createElement("div");
        divError.setAttribute("class", "error");
        // atribuindo um valor para o valor interno do html da div
        divError.innerHTML =
          "<span><strong>Pokemon Não Encontrado</strong></span>";
        display.insertBefore(divError, nextButton);
      });
  }
}
