/* --------------------------------------------------------------------------------

Ciclo While
snack 1:
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

-------------------------------------------------------------------------------- */

const array = [];
let sum = 0;

while (sum < 50) {
    const n = Number(prompt('Inserisci un numero'));

    console.log(`Il numero inserito è: ${n}`);
    console.log(`Lo stato della sommatoria è: ${sum}`);
    console.log(`Viene eseguita l'operazione ${sum} + ${n}`)
    sum += n;
    array.push(n);
    console.log(`Il nuovo stato della sommatoria è: ${sum}`);
}
console.log(array);