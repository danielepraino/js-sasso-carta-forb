//creo un array che contiene sia il nome della mossa sia quello della mossa su cui vince
//(es. sasso contiene 1, vince su forbice che si trova all'elemento 1 dell'array)
var arrayGesture = [[["sasso"], [1]], [["forbice"], [2]], [["carta"], [0]]];

//creo una funzione generica per randomizzare un numero
//(non ha molto senso, ma era per provare a scrivere una funzione)
function randomNum(range) {
  random = Math.floor(Math.random() * range);
  return random;
}

//assegno due numeri random alla mossa giocatore e computer
var playerMove = randomNum(3);
var cpuMove = randomNum(3);
//stampo i valori per un controllo visuale
console.log("PLAYER: " + arrayGesture[playerMove][0]);
console.log("CPU: " + arrayGesture[cpuMove][0]);
//assegno i valori delle mosse vincenti a due variabili (mi serviranno successivamente per il controllo)
var playerWin = arrayGesture[playerMove][1];
var cpuWin = arrayGesture[cpuMove][1];

//controllo se la mossa cpu è uguale alla contromossa vincente del giocatore
//allora il giocatore ha vinto
//altrimenti se la mossa del giocatore è uguale alla contromossa vincente della cpu
//allora il giocatore ha perso
//altrimenti finisce in parità
if (cpuMove == playerWin) {
   console.log("HAI VINTO! " + arrayGesture[playerMove][0] + " batte " + arrayGesture[cpuMove][0]);
} else if (playerMove == cpuWin) {
  console.log("HAI PERSO! " + arrayGesture[cpuMove][0] + " batte " + arrayGesture[playerMove][0]);
} else {
  console.log("PARITÀ! " + arrayGesture[playerMove][0] + " non batte " + arrayGesture[cpuMove][0])
}
