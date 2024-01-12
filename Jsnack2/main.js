/* --------------------------------------------------------------------------------

Ciclo While
snack 2
genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale

-------------------------------------------------------------------------------- */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let n = randomNumber(0, 10);
let userNumber = Number(prompt('Indovina il numero estratto da 0 a 10:'));

// do {

//     if (userNumber < n) {
//         console.log("Il numero è troppo basso");
//     } else if (userNumber > n) {
//         console.log("Il numero è troppo alto");
//     } else {
//         console.log("Hai indovinato!");
//     }

//     console.log(userNumber);
//     console.log(n)
// } while (userNumber !== n );

if (userNumber === n) {
    document.body.innerHTML += `<p>Hai indovinato!</p>`;
} else {
    while (userNumber != n) {
        //userNumber = Number(prompt('Indovina il numero estratto da 0 a 10:'));

        if (userNumber < n) {
            //document.body.innerHTML += `<p>Il numero è troppo basso</p>`;
            userNumber = Number(prompt('Il numero è troppo basso! Riprova.. Indovina il numero estratto da 0 a 10:'));
        } else if (userNumber > n) {
            //document.body.innerHTML += `<p>Il numero è troppo alto</p>`;
            userNumber = Number(prompt('Il numero è troppo alto! Riprova.. Indovina il numero estratto da 0 a 10:'));
        } else {
        }
    }
    document.body.innerHTML += `<p>Hai indovinato!</p>`;
}