/* STEP:
1.Definire una funzione per generare un numero casuale;
2.Generare 5 numeri casuali utilizzando la funzione appena definita;
3.Inserire in pagina i 5 numeri appena generati;
4.Definire una funzione che gestisca il gioco;
5.Far partire un timer (o con setTimeout o con setInterval) di 30 secondi e specificare cosa deve fare dopo questo tempo (tramite una funzione)
6.Al termine degli input dell'utente, mostrare in qualche modo il risultato.*/


//Step n°1 - funzione per generare numero casuale:
function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Creo una costante (array)
const numbers = [];


//Step n°2 - genero 5 numeri casuali (senza ripetizioni nell'array) con un ciclo FOR:
for (let i = 0; i < 5; i++) {
    let randomNumber = getRandomNumber (1, 99);

    while(numbers.includes(randomNumber)){
        randomNumber = getRandomNumber(1, 99);
    }
    console.log(randomNumber);

    numbers.push(randomNumber);
}

console.log(numbers);


//Step n°3 - Inserire in pagina i 5 numeri appena generati (prendo elemento dal DOM e poi inserisco in pagina l'array)
const numbersContainer = document.getElementById('numbers-container');
numbersContainer.innerHTML = numbers;

//Step n°4 e 5 - Far partire due timer: 
//In questo modo svuotiamo la pagina dai numeri dopo 5 secondi
setTimeout(function () {
    numbersContainer.innerHTML = '';
}, 5000);

//In questo modo facciamo partire il gioco dopo 5.5 sec...
setTimeout(function () {
    const guessedNumbers = [];

//...quindi i prompt che richiedono i numeri
    for (let i = 0; i < 5; i++) {
        const userInput = prompt('Inserisci un numero:');
        console.log(userInput);

//Step n°6 - Al termine degli input dell'utente, mostrare il risultato:
        if(userInput == numbers[i]){
            guessedNumbers.push(numbers[i]);
        }
    }

    numbersContainer.innerHTML = 'Hai indovinato ' + guessedNumbers.length + ' numeri<br>';
    numbersContainer.innerHTML += guessedNumbers;
}, 5500);

