export default function initModalHelp() {
  const openButton = document.querySelector('[data-modal ="open"]');
  const closeButton = document.querySelector('[data-modal ="close"]');
  const containerModal = document.querySelector('[data-modal ="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  if (openButton && closeButton && containerModal) {
    closeButton.addEventListener("click", toggleModal);
    openButton.addEventListener("click", toggleModal);
  }
}
