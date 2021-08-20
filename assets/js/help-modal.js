export default function initModalHelp() {

    const openButton = document.querySelector('[data-modal ="open"]');
    const closeButton = document.querySelector('[data-modal ="close"]');
    const containerModal = document.querySelector('[data-modal ="container"]');
    const img = document.querySelector('[data-modal ="img"]');

    
    if (openButton && closeButton && containerModal) {
        function toggleModal(event) {
            event.preventDefault();
            containerModal.classList.toggle('ativo');
        }
        closeButton.addEventListener('click', toggleModal);
        openButton.addEventListener('click', toggleModal);
    }
}