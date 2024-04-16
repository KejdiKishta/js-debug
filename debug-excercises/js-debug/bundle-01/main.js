/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// stampa i numeri da 0 a 4
// nessun errore di sintassi
// il segno è sbagliato in quanto la condizione è sbagliata già in partenza
for (let i = 0; i /*>*/ < 5; i++) {
    console.log(i);
}


// ESERCIZIO 2
// funzione per cui se il numero è divisibile per 2 ritorniamo il numero + 5 altrimenti solo il numero
// usato indicatore di assegnazione invece che indicatore di uguaglianza
// nessun errore di logica
function addIfEven(num) {
    if (num % 2 /*=*/ ===  0) {
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]