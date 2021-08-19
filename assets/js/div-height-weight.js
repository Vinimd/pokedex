export default function CreateDivHW(file) {
    const div = document.createElement('div');
    div.setAttribute('class', 'status');
    //adicionando informações de altura e peso do pokemon
    div.innerHTML = `<span>Height : ${(file.height)/10} m</span><span>weight : ${(file.weight)/10} Kg</span>`;
    return div
}