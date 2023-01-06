export default function initModal() {
  const openButton = document.querySelector("[data-modal='abrir']");
  const closeButton = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");

  if (openButton && closeButton && containerModal) {
    function toggleModal(e) {
      e.preventDefault();
      containerModal.classList.toggle("active");
    }
    function outsideClick(e) {
      if (event.target === this) toggleModal(e);
    }

    openButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", outsideClick);
  }
}
