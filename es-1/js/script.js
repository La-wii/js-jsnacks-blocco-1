// L’utente inserisce due parole in successione, con due prompt.
var parolaUno = prompt("Inserisci la prima parola");
var parolaDue = prompt("Inserisci la seconda parola");

var lunghezzaParolaUno = parolaUno.length;
var lunghezzaParolaDue = parolaDue.length;

// Il software stampa prima la parola più corta, poi la parola più lunga.

if (lunghezzaParolaUno == lunghezzaParolaDue) {
    document.getElementById('uno').innerHTML = 'Le due parole sono uguali' + ' ' + parolaUno + ' ' + parolaDue;
} else if (lunghezzaParolaUno < lunghezzaParolaDue) {
    document.getElementById('uno').innerHTML = 'La parola più lunga è :' + ' ' + parolaUno + ' ' + parolaDue; 
} else {
    document.getElementById('uno').innerHTML = 'La parola più lunga è :' + ' ' + parolaDue + ' ' + parolaUno; 
}

