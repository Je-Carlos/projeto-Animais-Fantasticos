// Navegação por tabs
function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const activeClass = "active";
  tabContent[0].classList.add(activeClass); // Primeiro item sempre ativo

  // verificar se existe a tabMenu e tabContent, para não dar erro de carregamento.
  if (tabMenu.length && tabContent.length) {
    // Função que adiciona a classe "active" ao elemento clicado e remove daqueles que não foram clicados.
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      const dataDirecao = tabContent[index].dataset.anime;
      tabContent[index].classList.add(activeClass, dataDirecao);
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
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
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
  const linksInterno = document.querySelectorAll("[data-menu='scroll'] a[href^='#']");
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

// Scroll Animation
function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const windowLoad = window.innerHeight * 0.5; // Calculo para pegar 50% da tela
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top; // Verificar aonde está as sections em relação a tela
        isSectionVisible = sectionTop - windowLoad < 0;
        // Quando o sectionTop for menor que 0
        if (isSectionVisible) section.classList.add("active");
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initScrollAnimation();
