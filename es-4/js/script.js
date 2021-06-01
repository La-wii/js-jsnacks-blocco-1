// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 

var invitati = ['Gianluca', 'Edo', 'Giada', 'Viola'];

// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var nomeUtente = prompt('Inserisci il tuo nome');
// var nonInvitato = alert('Non sei invitato alla festa');

var invitato = false;

for (var i = 0; i < invitati.length; i++) {
    if (nomeUtente == invitati[i]){
        invitato = true;

    }
}

if (invitato) {
    console.log('Benvenuto alla festa');
    alert('Benvenuto alla festa');
} else {
    console.log('Non sei invitato alla festa');
    alert('Non sei invitato');
}