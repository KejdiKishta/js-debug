//* prendo l'input del DOM
const input = document.querySelector('input');
//* creo array vuoto in cui andrò a mettere quello che digita l'utente
const array = [] /*null - è array quindi serve un array vuoto*/;

input.addEventListener('keypress', function(event) {
    //* la funzione prosegue se viene premuto invio
    if (event.code != 'Enter')    return;
    //* la funzione prosegue se il valore dell'input è diverso da ""
    if (input.value/*.length - length è un number e qui non ci interessa*/ == '') return;

    //* dopo le condizioni push dell'input nell'array
    array./*add - per array è push*/push(input.value);

    
    // console.log(array);
    
    //* elemento da aggiungere nel DOM
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li./*text - manca inner*/innerText = input.value;
    //* stampa nel DOM
    document.querySelector('ul')./*push - si usa solo per gli array*/append(li);
    
    //* ripulisco l'input
    input.value = "";

    //* variabile che conta le volte in cui viene ripetuto un elemento
    let counter = /*'' - per essere contatore deve essere un numero*/0;
    //* variabile item dell'array
    let item    = array[0];
    //* valore massimo raggiunto da un elemento
    /*const max - nella condizione coambia il proprio valore*/
    let max   = 1;
    //* array con il conteggio delle ripetizioni
    let elems = [];

    //* scorriamo gli elementi dell'array
    for (let i = 0; i < array.length /*mortacci vostra sto impazzendo*/; i++) {
        let val = array[i];

        //* se val non è presente in elems compare come 1 altrimenti incrementa
        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        console.log(elems);
        //* ciclo per controllare se un elemento è presente altre volte
        for (let j = i; j < array.length; /*i++ - che dio vi maledica*/ j++) {
            //* per ogni elemento nell'array uguale a quello preso in considerazione da i il counter aumenta
            if (array[i] == array[j]) {
                counter++;
                //* se il counter è minore di max allora max diventa uguale al counter e l'elemento viene salvato
                if (max < counter)/*mancano graffe*/{
                    max  = counter;
                    item = array[i];
                }
            }
        }

        counter = 0;
    }

    //* selezioare l'elemento con il numero con il counter più alto
    const alert = document.querySelector/*getElementsByClassName - non so cosa sia un HTMLCollection, dal nome andrebbe bene in qualche sfilata di moda*/('.alert');
    console.log(alert);

    //* lo facciamo comparire
    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    //* aggiungiamo l'item con il conteggio più alto
    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(/*'*/`${item} trovato ${max} volte`/*'*/);
});

console.log(array);