export default function CreateDivName(file) {
  const div = document.createElement("div");
  div.setAttribute("class", "pokemon-name-info");
  // adicionando o nome do pokemon a div
  div.innerText = `Nº${file.id}:${file.name}`;
  return div;
}
