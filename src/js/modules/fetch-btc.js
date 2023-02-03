export default function initFetchBtc() {}
fetch("https://blockchain.info/ticker")
  .then((response) => response.json())
  .then((btc) => {
    const btcPrice = document.querySelector(".btc-price");
    btcPrice.innerText = (1000 / btc.BRL.sell).toFixed(5);
  })
  .catch(
    Error((erro) => {
      console.log(erro);
    })
  );
//https://blockchain.info/ticker
