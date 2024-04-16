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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'benzina' /*'Benzina'*/ //maiuscolo
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'diesel' /*'Diesel'*/ //maiuscolo
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }, //manca virgola
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'benzina' /*'Benzina'*/ //maiuscolo 
    }/*,*/ // virgola inutile
];

const gasolineCars = cars.filter( (auto) /*>= arrow*/ => auto.type === 'benzina');

const dieselCars = cars.filter( (auto) => {
    auto.type === 'diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' /*|| and e non or*/ && auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log(gasolineCars);
console.log('*******************************');

console.log('Auto a diesel');
console.log(dieselCars);
console.log('*******************************');

console.log('Tutte le altre auto');
console.log(otherCars);