export default function initAnimaNumeros() {
  function animaNumbers() {
    const numeros = document.querySelectorAll("[data-numero]");
    console.log(numeros);
    numeros.forEach((num) => {
      const textNumero = +num.innerText;
      const incremento = Math.floor((textNumero * 9) / 100);
      let start = 0;

      const timer = setInterval(() => {
        start = start + incremento;
        num.innerText = start;
        if (start > textNumero) {
          num.innerText = textNumero;
          clearInterval(timer);
        }
      }, 230 * Math.random());
    });
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("active")) {
      observer.disconnect();
      animaNumbers();
    }
  }
  const observer = new MutationObserver(handleMutation);
  const observeTarget = document.querySelector(".numeros");

  observer.observe(observeTarget, { attributes: true });
}
