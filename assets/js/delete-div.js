export default function DeletDiv() {
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