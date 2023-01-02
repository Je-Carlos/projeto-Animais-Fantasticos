// Scroll Suave
export default function initScrollSuave() {
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
