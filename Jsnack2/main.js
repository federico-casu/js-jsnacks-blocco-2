/* --------------------------------------------------------------------------------

Ciclo While
snack 2
genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale

-------------------------------------------------------------------------------- */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let n = randomNumber(1, 100);
let userNumber = null;

do {
    if (userNumber === null) {
        userNumber = Number(prompt('Indovina il numero estratto da 0 a 100:'));
    } else if (userNumber < n) {
        userNumber = Number(prompt('Numero troppo basso! Riprova..<br>Indovina il numero estratto da 0 a 100:'));
    } else if (userNumber > n) {
        userNumber = Number(prompt('Numero troppo alto! Riprova..<br>Indovina il numero estratto da 0 a 100:'));
    }

    console.log(userNumber);
    console.log(n)
} while (userNumber !== n );

document.body.innerHTML += `<p>Hai indovinato!</p>`;

/*
if (userNumber === n) {
    document.body.innerHTML += `<p>Hai indovinato!</p>`;
} else {
    while (userNumber != n) {
        //userNumber = Number(prompt('Indovina il numero estratto da 0 a 10:'));

        if (userNumber < n) {
            //document.body.innerHTML += `<p>Il numero è troppo basso</p>`;
            userNumber = Number(prompt('Il numero è troppo basso! Riprova.. Indovina il numero estratto da 1 a 100:'));
        } else if (userNumber > n) {
            //document.body.innerHTML += `<p>Il numero è troppo alto</p>`;
            userNumber = Number(prompt('Il numero è troppo alto! Riprova.. Indovina il numero estratto da 1 a 100:'));
        }
    }
    document.body.innerHTML += `<p>Hai indovinato!</p>`;
}
*/