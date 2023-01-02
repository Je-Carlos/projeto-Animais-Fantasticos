// Scroll Animation
export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const windowLoad = window.innerHeight * 0.5; // Calculo para pegar 50% da tela
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top; // Verificar aonde está as sections em relação a tela
        const isSectionVisible = sectionTop - windowLoad < 0;
        // Quando o sectionTop for menor que 0
        if (isSectionVisible) section.classList.add("active");
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
