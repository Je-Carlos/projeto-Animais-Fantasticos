// Navegação por tabs
export default function initTabNav() {
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





