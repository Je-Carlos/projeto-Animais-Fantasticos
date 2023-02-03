import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchGatos() {
  // puxando o arquivo da API e transformando em json
  async function fetchGatos(url) {
    const gatosResponse = await fetch(url);
    const gatosJson = await gatosResponse.json();
    const numerosGrid = document.querySelector(".numeros-grid");
    gatosJson.forEach((gato) => {
      const divGato = createCat(gato);
      numerosGrid.appendChild(divGato);
    });
    // iniciando a função de animar os números após ocorrer o fetch
    initAnimaNumeros();
  }
  fetchGatos("./src/datagato.json");

  // Criando as divs, adicionando as classes e adicionando os valores da API
  function createCat(gato) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${gato.specie}</h3><span data-numero>${gato.age}</span>`;
    return div;
  }
}
