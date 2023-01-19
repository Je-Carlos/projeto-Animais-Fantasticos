import outsideClick from "./outsideClick.js";
export default function initMobileMenu() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const navIcon = document.querySelectorAll(".navIcon");
  const eventos = ["click"];

  if (menuButton) {
    function openMenu(e) {
      menuList.classList.add("active");
      menuButton.classList.add("active");
      navIcon.forEach((icon) => {
        icon.classList.toggle("close");
      });
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
        navIcon[0].classList.remove("close");
        navIcon[1].classList.add("close");
      });
    }
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
