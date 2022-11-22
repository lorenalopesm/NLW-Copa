function createGame(player1, hour, player2) {
  return `
  <li>
    <div class="country">
      <img src="./assets/${player1}-icon.svg" alt="ícone redondo da bandeira do ${player1}">
      <p>${player1}</p>
    </div>
    <strong>${hour}</strong>
    <div class="country">
      <img src="./assets/${player2}-icon.svg" alt="ícone redondo da bandeira de ${player2}">
      <p>${player2}</p>
    </div>
</li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>

    <ul>
     ${games}
    </ul>
  </div>
  `
}
function changeTheme() {
  document.body.classList.toggle("blue")
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "16:00", "equador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", "iran") +
      createGame("senegal", "13:00", "holanda") +
      createGame("estadosUnidos", "16:00", "paisDeGales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "arabiaSaudita") +
      createGame("dinamarca", "10:00", "tunisia") +
      createGame("mexico", "13:00", "polonia") +
      createGame("australia", "16:00", "franca")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croacia") +
      createGame("alemanha", "10:00", "japao") +
      createGame("espanha", "13:00", "costaRica") +
      createGame("belgica", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("camaroes", "07:00", "suica") +
      createGame("coreiaDoSul", "10:00", "uruguai") +
      createGame("portugal", "13:00", "gana") +
      createGame("brasil", "16:00", "servia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("paisDeGales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("holanda", "13:00", "equador") +
      createGame("inglaterra", "16:00", "estadosUnidos")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "australia") +
      createGame("polonia", "10:00", "arabiaSaudita") +
      createGame("franca", "13:00", "dinamarca") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japao", "07:00", "costaRica") +
      createGame("belgica", "10:00", "marrocos") +
      createGame("croacia", "13:00", "canada") +
      createGame("alemanha", "16:00", "espanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("servia", "07:00", "camaroes") +
      createGame("coreiaDoSul", "10:00", "gana") +
      createGame("brasil", "13:00", "suica") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("equador", "12:00", "senegal") +
      createGame("holanda", "12:00", "qatar") +
      createGame("iran", "16:00", "estadosUnidos") +
      createGame("paisDeGales", "16:00", "inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", "franca") +
      createGame("australia", "12:00", "dinamarca") +
      createGame("polonia", "16:00", "argentina") +
      createGame("arabiaSaudita", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croacia", "12:00", "belgica") +
      createGame("canada", "12:00", "marrocos") +
      createGame("japao", "16:00", "espanha") +
      createGame("costaRica", "16:00", "alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("coreiaDoSul", "12:00", "portugal") +
      createGame("gana", "12:00", "uruguai") +
      createGame("servia", "16:00", "suica") +
      createGame("camaroes", "16:00", "brasil")
  )
