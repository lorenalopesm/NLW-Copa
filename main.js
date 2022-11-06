function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do(a) ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira do(a) ${player2}">
  </li>
  `
}
let delay = -0.3;
function creatCard(date, day, games) {
  delay = delay + 0.3
  return `
   <div class="card" style="animation-delay: ${delay}s">
      
      <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 

   creatCard(
     "24/11",
     "Quinta",
     createGame("switzerland", "16:00", "camaroon") +
       createGame("koreia", "16:00", "uruguay") +
       createGame("portugal", "13:00", "ghana") +
       createGame("brazil", "16:00", "servia")
   )  +    
   creatCard(
     "28/11",
     "Segunda",
     createGame("camaroon", "07:00", "servia") +
       createGame("koreia", "10:00", "ghana") +
       createGame("brazil", "13:00", "switzerland") +
       createGame("portugal", "16:00", "uruguay")
   )  +   
   creatCard(
     "02/12",
     "Sexta",
     createGame("koreia", "12:00", "portugal") +
     createGame("ghana", "12:00", "uruguay") +
     createGame("brazil", "16:00", "camaroon") +
     createGame("servia", "16:00", "switzerland")
   )      
  

