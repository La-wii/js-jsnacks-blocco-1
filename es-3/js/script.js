// Crea un array vuoto. 

var vuoto = [];

// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

for (var i = 0; i < 6; i++) {
    var numero = parseInt(prompt('inserisci il numero'));
    if (numero % 2 != 0) {
        vuoto.push(numero);
    }
}

document.getElementById("solo-dispari").innerHTML = vuoto;
