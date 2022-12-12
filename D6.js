/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
  return l1 * l2;
}
let a = area(10, 20);
console.log("Esercizio 1: area:", a);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n1) * 3;
  }
  return n1 + n2; //eseguito solo nel caso in cui non entri nell'if
}
console.log("Esercizio 2: crazySum:", crazySum(20, 20));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(param) {
  let numero = 19;
  let differenzaAssoluta;
  if (param > numero) {
    differenzaAssoluta = param - 19;
    return differenzaAssoluta * 3;
  }
  differenzaAssoluta = 19 - param;
  return differenzaAssoluta; //eseguito solo nel caso in cui non entri nell'if
}
console.log("Esercizio 3: crazyDiff:", crazyDiff(29));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
  if (!isNaN(Number(n))) {
    if ((n > 20 && n <= 100) || n === 400) {
      return true;
    }
    return false;
  }
}
console.log("Esercizio 4: boundary:", boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (stringa) {
  let words = stringa.split(" ");

  if (!(words[0] === "EPICODE")) {
    words.unshift("EPICODE");
    return words.join(" ");
  }
  return stringa;
};

let risposta = epify("Questa è una stringa di esempio");
console.log("Esercizio 5: epify:", risposta);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
const check3and7 = function (num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  }
  return false;
};
console.log("Esercizio 6: check3and7:", check3and7(6));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function (stringa) {
  let reverse = "";
  for (let i = stringa.length - 1; i >= 0; i--) {
    const carattere = stringa[i];
    reverse += carattere;
  }
  return reverse;
};
console.log("Esercizio 7: reverseString:", reverseString("direttore"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
// */
// const upperFirst = function (stringa) {
//   let words = stringa.split(" ");
//   let wordsUpper = Object.assign([], words);
//   console.log(wordsUpper);
//   for (let i = 0; i < wordsUpper.length; i++) {
//     // let firstletter = words[i][0];
//     wordsUpper[i][0] = "" + wordsUpper[i][0].toUpperCase();
//     console.log(wordsUpper[i][0]);
//   }

//   return wordsUpper;
// };

// console.log(upperFirst("questa stringa sarà capitalizzata"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (stringa) {
  let stringaTagliata = "";
  for (let i = 1; i < stringa.length - 1; i++) {
    stringaTagliata += stringa[i];
  }
  return stringaTagliata;
};
console.log("Esercizio 9: cutString:", cutString("amare Alfredo"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
