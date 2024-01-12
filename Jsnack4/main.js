/* --------------------------------------------------------------------------------

Ciclo For
snack 4
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

-------------------------------------------------------------------------------- */

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const arrayEvenNumbers = [];

for (let i = 0; i < 10; i++) {

    const n = Number(prompt('Inserisci un numero:'));
    
    if (isEven(n)) {
        console.log(n);
        arrayEvenNumbers.push(n);
    } else {
        console.log(n+1);
        arrayEvenNumbers.push(n+1);
    }

}

console.log(arrayEvenNumbers);