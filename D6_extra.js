// Esercizi aggiuntivi (facoltativi) per D4
const giveMeRandom = function (n) {
  let numeriCasuali = [];
  for (let i = 0; i < n; i++) {
    numeriCasuali.push(Math.floor(Math.random() * 11)); //fino a 10 incluso, 11 escluso
  }
  return numeriCasuali;
};
// console.log("numeri casuali: n=10", giveMeRandom(10));
/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
const checkArray = function (numeriCasuali) {
  // console.log(numeriCasuali.filter((n) => n > 5));
  console.log(numeriCasuali);
  numeriCasuali.forEach((num) => {
    if (num > 5) {
      console.log(num, "è maggiore di 5");
    }
  });

  return numeriCasuali.filter((n) => n > 5).reduce((acc, curr) => acc + curr);
};
// let numeriCasuali = giveMeRandom(10);
// console.log(
//   "EXTRA 1: somma dei numeri maggiori di 5",
//   checkArray(numeriCasuali)
// );
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
let shoppingCart = [
  { id: 1, price: 8, name: "carne", quantity: 2 },
  { id: 2, price: 20, name: "pesce", quantity: 1 },
];

const shoppingCartTotal = function (carrello) {
  let totale = 0; //price * quantity per ogni elem di carrello
  for (let i = 0; i < carrello.length; i++) {
    const articolo = carrello[i];
    totale += articolo.price * articolo.quantity;
  }
  return totale;
};
// console.log("Extra 2:", shoppingCartTotal(shoppingCart));
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

const addToShoppingCart = function (product) {
  shoppingCart.push(product);
  return shoppingCart.length;
};

// console.log(
//   "Extra 3:",
//   addToShoppingCart({ id: 3, price: 12, name: "dolce", quantity: 1 })
// );

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

const maxShoppingCart = function (carrello) {
  let max = carrello[0];
  for (let i = 0; i < carrello.length; i++) {
    const product = carrello[i];
    if (product.price > max.price) {
      max = product;
    }
  }
  return max;
};
// console.log("Extra 4:", maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
const latestShoppingCart = function (carrello) {
  let lastIndex = carrello.length - 1;
  return carrello.at(lastIndex);
  // return carrello[carrello.length - 1];
};
// console.log("Extra 5:", latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
// x è compreso tra 0 e 9
const loopUntil = function (x) {
  let contaMaggiori = 0;
  while (contaMaggiori < 3) {
    let random = Math.floor(Math.random() * 10);
    if (random > x) {
      contaMaggiori++;
    } else {
      contaMaggiori = 0;
    }
    console.log(random);
  }
};
// console.log("Extra 6:");
// loopUntil(5);

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
const average = function (numbers) {
  //media = somma / numeroElementi = somma / lunghezzaArray
  // isNaN(n) trasforma in numero mentre Number.isNaN(n) no
  return (
    numbers.filter((n) => !isNaN(n)).reduce((acc, curr) => acc + curr) /
    numbers.length
  );
};
// console.log("Extra 7:", average([5, 10, "gatto", 5, 4, 6]));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
const longest = function (stringhe) {
  let max = stringhe[0];
  for (let i = 0; i < stringhe.length; i++) {
    const stringa = stringhe[i];
    if (stringa.length > max.length) {
      max = stringa;
    }
  }

  return max;
};
// console.log("Extra 8:", longest(["armadillo", "coccodrillo", "gatto", "cane"]));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
const spamFilter = function (emailContent) {
  if (
    emailContent.toLowerCase().includes("spam") ||
    emailContent.toLowerCase().includes("scam")
  ) {
    return false;
  }
  return true;
};
// console.log("Extra 9:", spamFilter("Nuova offerta commerciale - "));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
const numOfDaysFrom = function (date) {
  const today = new Date();
  const differenceMills = today.getTime() - date.getTime();
  return Math.floor(differenceMills / 1000 / 60 / 60 / 24);
};

// console.log("Extra 10:", numOfDaysFrom(new Date("2021-12-10")));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
const matrixGenerator = function (x, y) {
  let matrix = [];
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      matrix.push("" + i + j);
    }
  }
  return matrix;
};
console.log(matrixGenerator(3, 2));
