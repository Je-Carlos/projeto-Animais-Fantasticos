export default function workingTime() {
  const diasAberto = document.querySelector("[data-semana]");
  const diasSemana = diasAberto.dataset.semana.split(",").map(Number);
  const horasSemana = diasAberto.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  /* Irá ver ser os dias da semana, se o index for diferente dos dias passados
irá retornar -1 (fechado) */
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  /* Se o horarioAgora for maior ou igual a 8 e menor que 18 estára aberto */
  const horarioAberto =
    horarioAgora >= horasSemana[0] && horarioAgora < horasSemana[1];

  if (semanaAberto && horarioAberto) {
    diasAberto.classList.add("aberto");
  }
}
