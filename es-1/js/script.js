// L’utente inserisce due parole in successione, con due prompt.
var parolaUno = prompt("Inserisci la prima parola");
var parolaDue = prompt("Inserisci la seconda parola");

var lunghezzaParolaUno = parolaUno.length;
var lunghezzaParolaDue = parolaDue.length;

// Il software stampa prima la parola più corta, poi la parola più lunga.

if (lunghezzaParolaUno == lunghezzaParolaDue) {
    console.log("uguali");
    document.getElementById('uno').innerHTML = 'Le due parole sono uguali' + ' ' + parolaUno + ' ' + parolaDue;
} else if (lunghezzaParolaUno > lunghezzaParolaDue) {
    console.log("parola uno più lunga");
    document.getElementById('uno').innerHTML = 'La parola più lunga è :' + ' ' + parolaUno; 
} else {
    console.log("parola due più lunga");
    document.getElementById('uno').innerHTML = 'La parola più lunga è :' + ' ' + parolaDue; 
}

