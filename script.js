const tabMenu = document.querySelectorAll(".js-tabMenu li");
const tabContent = document.querySelectorAll(".js-tabContent section");
tabContent[0].classList.add("active"); // Primeiro item sempre ativo

// verificar se existe a tabMenu e tabContent, para não dar erro de carregamento.
if (tabMenu.length && tabContent.length) {
  // Função que adiciona a classe "active" ao elemento clicado e remove daqueles que não foram clicados.
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("active");
    });
    tabContent[index].classList.add("active");
  }

  // Função que adiciona o evento de click em cada imagem, quando clicada,
  // chama a função "activeTab" passando o index da imagem clicada.
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
