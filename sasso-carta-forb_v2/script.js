//creo un array per le classi di fontawesome
var arrayHands = ["fa-hand-rock", "fa-hand-scissors", "fa-hand-paper"];
//creo un array che contiene sia il nome della mossa sia quello della mossa su cui vince
//(es. sasso contiene 1, vince su forbice che si trova all'elemento 1 dell'array)
var arrayGesture = [[["sasso"], [1]], [["forbice"], [2]], [["carta"], [0]]];

//inizializzo il gioco
document.getElementById("playerHand").innerHTML = "<p>PLAYER</p><i class='fas fa-hand-rock'></i>";
document.getElementById("cpuHand").innerHTML = "<p>CPU</p><i class='fas fa-hand-rock'></i>";
document.getElementById("result").innerHTML = "<p>Prova a battere la CPU.</p><p>BUONA FORTUNA!</p>";

//creo una funzione generica per randomizzare un numero
//(non ha molto senso, ma era per provare a scrivere una funzione)
function randomNum(range) {
  random = Math.floor(Math.random() * range);
  return random;
}

//al click del bottone eseguo tutta la logica del gioco
document.getElementById("btnMove").onclick = function() {
  //assegno due numeri random alla mossa giocatore e computer
  var playerMove = randomNum(3);
  var cpuMove = randomNum(3);
  //stampo i valori per un controllo visuale
  console.log("PLAYER: " + arrayGesture[playerMove][0]);
  console.log("CPU: " + arrayGesture[cpuMove][0]);
  //assegno i valori delle mosse vincenti a due variabili (mi serviranno successivamente per il controllo)
  var playerWin = arrayGesture[playerMove][1];
  var cpuWin = arrayGesture[cpuMove][1];
  //assegno le classi dei gesti corrispondenti ai div
  document.getElementById("playerHand").innerHTML = "<p>PLAYER</p><i class='fas " + arrayHands[playerMove] + "'></i>";
  document.getElementById("cpuHand").innerHTML = "<p>CPU</p><i class='fas " + arrayHands[cpuMove] + "'></i>";
  console.log ("playerMove: " + playerMove + " cpuMove: " + cpuMove);
  console.log ("playerWin: "+playerWin + " cpuWin: "+cpuWin);

  //se la mossa della cpu è uguale alla contromossa vincente del giocatore allora hai vinto!
  //altrimenti se la mossa del giocatore è uguale alla contromossa vincente della cpu hai perso!
  //altrimenti, come ultima condizione se le mosse sono uguali, finisce in parità
  if (cpuMove == playerWin) {
    document.getElementById("result").innerHTML = "<p>HAI VINTO! </p><p>" + arrayGesture[playerMove][0] + " batte " + arrayGesture[cpuMove][0] + "</p>";
  } else if (playerMove == cpuWin) {
    document.getElementById("result").innerHTML = "<p>HAI PERSO! </p><p>" + arrayGesture[cpuMove][0] + " batte " + arrayGesture[playerMove][0] + "</p>";
  } else {
    document.getElementById("result").innerHTML = "<p>PARITÀ! </p><p>" + arrayGesture[playerMove][0] + " non batte " + arrayGesture[cpuMove][0] + "</p>";
  }
};
