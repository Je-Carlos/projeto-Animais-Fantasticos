import outsideClick from "./outsideClick.js";
export default function initMobileMenu() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const navIcon = document.querySelectorAll(".navIcon");
  const eventos = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(e) {
      menuList.classList.add("active");
      menuButton.classList.add("active");
      navIcon.forEach((icon) => {
        icon.classList.toggle("close");
      });
      // TODO: Arrumar botão ao clicar fora não mudar o botão
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
