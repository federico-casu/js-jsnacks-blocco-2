/* ------------------------------------------------------------------------------------------

Ciclo For
snack 3
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro

------------------------------------------------------------------------------------------ */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const array1 = [];
const array2 = [];
const lengthArray1 = Number(prompt('Inserisci la lunghezza del primo array:'));
const lengthArray2 = Number(prompt('Inserisci la lunghezza del secondo array:'));

for (let i = 0; i < lengthArray1; i++) {
    array1.push(randomNumber(0, 100));
}

for (let i = 0; i < lengthArray2; i++) {
    array2.push(randomNumber(0, 100));
}

console.log(array1);
console.log(array2);

if (array1.length > array2.length) {
    const x = array1.length - array2.length;

    for (let i = 0; i < x; i++) {
        array2.push(randomNumber(0, 100));
    }
} else if (array1.length < array2.length) {
    const x = array2.length - array1.length;

    for (let i = 0; i < x; i++) {
        array1.push(randomNumber(0, 100));
    }
}

console.log(array1);
console.log(array2);
