// Basket
// Il software deve generare casualmente le statistiche di gioco di
// 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti
// informazioni, facendo attenzione che il numero generato abbia
// senso:
// - Codice Giocatore Univoco (formato da 3 lettere
// maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per tiri da 3 punti
// Una volta generato il database, il programma deve chiedere all'utente di inserire un Codice Giocatore e il programma restituisce le statistiche

function getRandom(min, max){
  var random = Math.floor(Math.random() * (max - min + 1)+ min);
  return random;
}

function getCode() {
  var stringa = "AAA";
  //aggiungo 3 valori alla stringa
  for (var i = 0; i < 3; i++) {
  //cambia il valore di stringa aggiungendo un numero random
  stringa += getRandom(0, 9);
  }
  return stringa;
}

var alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

function getCode() {
  var stringa = "";
  for (var i = 0; i < 3; i++) {
    stringa = stringa + alfabeto[getRandom(0, 10)];
  }
  for (var k = 0; k < 3; k++) {
    stringa = stringa + getRandom(0, 9);
  }
  return stringa;
}


var giocatori = [];

for (var i = 0; i < 100; i++) {
  //creo oggetti con range random
  var nome = getCode();
  var puntifatti = getRandom(0, 70);
  var numero_rimbalzi = getRandom(0, 30);
  var falli = getRandom(0, 30);
  var puntida2 = getRandom(0, 100) + "%";
  var puntida3 = getRandom(0, 100) + "%";

  var nome = getCode();
  if (i < 10) {
    console.log(nome);
  }

  // inserisco oggetti nell'array
  giocatori.push({codice_giocatore:nome, punti:puntifatti, rimbalzi:numero_rimbalzi, falli:falli, percentuale_punti_da_2:puntida2, percentuale_punti_da_3:puntida3});
}
console.log(giocatori);

var codiceGiocatore = prompt("Inserisci codice giocatore:");

var i = 0;
var trovato = false;

while (trovato == false && i < giocatori.length) {
var giocatore = giocatori[i];
  if (codiceGiocatore == giocatore["codice_giocatore"]) {
    trovato = true;
    document.writeln("<h2> Hai inserito il seguente codice giocatore: " + codiceGiocatore + "</h2>");
    document.writeln("<h2> Ecco le statistiche del giocatore richiesto:" + "</h2>" );
    for (var key in giocatore) {
    document.writeln(key + ":" + giocatore[key] + " -");
    console.log("Accesso consentito.");
  }

}

  i++;

}

/*

var i = 0;
var trovato = false;

while (trovato == false && i < giocatori.length) {
  var giocatore = giocatori[i];
  if (codiceGiocatore == giocatore["nome"]) {
    trovato = true;
    for (var key in giocatore) {
      document.writeln(key + ":" + giocatore[key] + "<br>" ) ;
    }
  }
  i++;
}
for (var i = 0; i < giocatori.length; i++) {
  var giocatore = giocatori[i];
  if (codiceGiocatore == giocatore.nome) {
    for (var key in giocatore) {
      document.writeln(key + ":" + giocatore[key] + "<br>");
    }
  }
}
*/
