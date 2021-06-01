// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri   inseriti. 
// Esegui questo programma in due versioni, con il for 

// var somma = 0;

// for (var i = 0; i < 5; i++){
//     numero = parseInt(prompt('inserisci un numero'));
//     somma += numero;   
// }
// document.getElementById('somma').innerHTML = somma;
// console.log(somma);

// NOTE: ALTRO METODO SOMMA:    somma = somma + numero;




// Con il while.
var i = 0; 
var somma = 0;

while (i < 5){
    numero = parseInt(prompt('inserisci un numero'));
    somma += numero; 
    i++;
}

document.getElementById('somma').innerHTML = somma;