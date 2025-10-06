/*l programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del 
passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare 
centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto 
segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60


PRO TIP:
prima di iniziare a scrivere codice, inizia con l'elencare gli strumenti da usare per svolgere la 
consegna e scoponi  il problema di sotto-task da svolgere. Questo ti aiuta a documentare il tuo flusso 
di lavoro ed il codice evitandoti di restare li a fissare una pagina vuota.*/

//definire una variabile per raccogliere l'età dell'utente
let user_age = Number(prompt('Digitare l\'età del passegero'))
document.writeln('Età: ' + user_age)
//definire una variabile per raccogliere la quantità di km che l'utente vuole percorrere
let user_distance = Number(prompt('Digitare la quantità di Km da percorrere'))
document.writeln('Distanza: ' + user_distance + 'Km')
/*calcolare il prezzo totale del viaggio*/
//calcolare prezzo biglietto (quantità di km che l'utente vuole percorrere * 0.21)
//fare in modo che il prezzo si presenti con due cifre decimali
//definisco il prezzo iniziale
let init_ticket_price = (user_distance * 0.21).toFixed(2).valueOf()
//applicare eventuali sconti in base all'età dell'utente
if (user_age < 18) {
    //calcolo il venti percento di sconto
    const discount_20 = (init_ticket_price * 2) / 10
    //applico lo sconto
    let ticket_price = init_ticket_price - discount_20
    document.writeln('Prezzo biglietto: ' + ticket_price + '€')
} else if (user_age >= 65) {
    //calcolo il quaranta percento di sconto
    const discount_40 = (init_ticket_price * 4) / 10
    //applico lo sconto
    let ticket_price = init_ticket_price - discount_40
    document.writeln('Prezzo biglietto: ' + ticket_price + '€')
} else {
    
}
