/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// funzione che stampa su una variabile un messaggio in base all'età
// message non è const ma let perchè subisce variazioni di contenuto
// usato apostrofo al posto del backtick (funziona comunque ma è sbagliato)
// manca il return
// la funzione deve essere assegnata ad una variabile
function checkAge() {
    const myAge = 32;
    /*const*/ let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = /*'*/`Hai più di 18 anni!`/*'*/;
    }
    return message;
}
let result = checkAge();
console.log(result);

// ESERCIZIO 2
// il codice stampa in console il numero di colori presenti nell'array
// length è scritto sbagliato
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors./*lenght*/length} colori!`);
}
printColorsNumber();

// ESERCIZIO 3
// il codice somma un numero predefinito (12) con un numero dato dall'user
// manca il parseInt in qunto il prompt ritorna come stringa
// mancano i controlli sul prompt che chiede il numero finche non ne ha uno valido
function addNumbers() {
    let userNumber;
    do {
        userNumber = parseInt(prompt('Inserisci un numero'));
    } while (isNaN(userNumber))

    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
// dato un array di email controlliamo se la mail data è presente nell'array
// è stata utilizzata una stringa invece del booleano
// bisogna usare il backtick e non l'apostrofo
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = /*'false'*/ false;

    if (addresses.includes(userEmail)) {
        grantAccess = /*'true'*/ true;
    }

    if (grantAccess === true) {
        console.log(/*'*/`Accesso consentito!`/*'*/);
    } else {
        console.log(/*'*/`Accesso negato!`/*'*/);
    }
}
checkAccess();

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
// il codice verifica che la mail inserita sia presente nell'array
// grantAccess deve essere booleano
// il controllo sui caratteri di userMail è meglio eseguirli fuori dal for in modo da verificarlo solamente una volta e non ad ogni indice dell'array
// il risultato in console viene stampato a ogni iterazione perciò sarebbe meglio spostare fuori dal ciclo for l'if con i console log
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = /*'*/ false /*'*/;
    
    if (userEmail.length > 5) {
        for (let i = 0; i < addresses.length; i++) {
            const email = addresses[i];

            // if (userEmail.length > 5) {

                if (email === userEmail) {
                    grantAccess = /*'*/true/*'*/;
                    break;
                }

            // }

        }
    }
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();





























