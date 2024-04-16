/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// nulla (in toria dovrebbe stampare i numeri da 0 a 4)
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
// funzione che stampa i numeri da 0 a 4
// ci sono le , al posto del ; nelle condizioni del for
// la funzione dovrebbe fare un loop fino a 5 ma stampa solamente i numeri da 0 a 4 e una sola volta
// manca l'= nella condizione
// se vogliamo il loop dovremmo aggiungere un if che riporti i = 0
function loopToFive() {
    for (let i = 0/*,*/ ; i /*<*/ <= 5/*,*/ ; i++) {
        console.log(i);
        if (i === 5) {
            i = 0;
        }
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// il codice dovrebbe stampare solamente i numeri pari presenti nell'array
// 1. il ; dopo l'incremento
// 2. numbers indica tutto l'array, bisogna aggiungere [i] per il singolo elemento
// 3. operatore di assegnazione invece che di uguaglianza
// 4. il ; dopo la condizione dell'if
// 5. nel push i indica solo l'indice mentre numbers[i] il num corrispondente all'indice
// 6. il return nel ciclo for è più corretto metterlo fuori in modo da eseguirlo solo 1 volta
// 7. per stampare il risultato bisogna metterlo in una variabile
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++/*;*/) {
        if (/*numbers*/ numbers[i] % 2 /*=*/ === 0)/*;*/ {
            evenNumbers.push(/*i*/numbers[i]);
        }
        /*return evenNumbers;*/
    }
    return evenNumbers;
}
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
let result = displayEvenNumbers();
console.log(result);