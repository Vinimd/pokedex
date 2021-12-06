// craindo uma div para conter a imagem do pokemon
export default function CreateDivImg(file) {
  const div = document.createElement("div");
  div.setAttribute("class", "pokemon-image");
  // adicionando tag img a div
  div.innerHTML = `<img class='image' src = ${file.sprites.front_default}>`;
  return div;
}
