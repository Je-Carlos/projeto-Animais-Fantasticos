// Navegação por tabs
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabMenu li");
  const tabContent = document.querySelectorAll(".js-tabContent section");
  const activeClass = "active";
  tabContent[0].classList.add(activeClass); // Primeiro item sempre ativo

  // verificar se existe a tabMenu e tabContent, para não dar erro de carregamento.
  if (tabMenu.length && tabContent.length) {
    // Função que adiciona a classe "active" ao elemento clicado e remove daqueles que não foram clicados.
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      tabContent[index].classList.add(activeClass);
    }

    // Função que adiciona o evento de click em cada imagem, quando clicada,
    // chama a função "activeTab" passando o index da imagem clicada.
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

// Accordion List
function initAccordionList() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "active";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordionList();

// Scroll Suave
function initScrollSuave() {
  const linksInterno = document.querySelectorAll(".js-menu a[href^='#']");
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topSec = section.offsetTop;
    window.scrollTo({
      top: topSec,
      behavior: "smooth",
    });
  }
  linksInterno.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();
