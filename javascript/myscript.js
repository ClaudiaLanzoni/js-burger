/*Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando
gli ingredienti proposti.
Consigli del giorno:
Create inizialmente un html base con gli elementi minimi necessari al funzionamento, passate poi alla parte JS ragionando come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
 console.log() è nostro amico!!!!.
Quando tutto funziona passate alla parte visiva lavorando al css.*/


const prezzoBase = 10; //costante prezzo base

const maggiorazioneStandard = 5; //costante maggiorazione standard

const maggiorazioneScontata = 2; //costante maggiorazione scontata

let nomePanino = document.getElementById("nome-panino");

let bottoneCalcolatore = document.getElementById("bottone-calcolatore");

let ingredienti = document.getElementsByClassName("ingrediente");

let ingredientiInOfferta = document.getElementsByClassName("offerta");

let elencoCoupon = ['sagra porchetta', 'sagra polenta', 'sagra porcini'];






bottoneCalcolatore.addEventListener('click', function () {

    if (nomePanino.value.length === 0) {
        alert('Inserisci un nome per il panino');
    } else {

    let sommaPrezzi = prezzoBase;

    for (let i = 0; i < ingredienti.length; i++) {
        
        let ingredientePaninoDesiderato = ingredienti[i];   
        
        //console.log(ingredientePaninoDesiderato.classList); 
        //classList finto array con gli elementi che hanno classe "ingrediente"
        
        if (ingredientePaninoDesiderato.checked && ingredientePaninoDesiderato.classList.contains("offerta")) { //se la checkbox attuale è selezionata 
                                                                                             
            sommaPrezzi += maggiorazioneScontata;

        } else if(ingredientePaninoDesiderato.checked) {
            sommaPrezzi += maggiorazioneStandard;
        }
    }

    //il discorso del coupon dovrò farlo dentro la function perchè altrimenti non funzionerà con il click del bottone
    //ma solo con la ricarica della pagina

    //creare variabile che prende valore dell'input text
    let nomeCoupon = document.getElementById("nome-coupon");

    //con if controllo se l'input dell'utente è presente negli array con .includes
    if (elencoCoupon.includes(nomeCoupon.value)) { //senza value non funziona!!!
                                                    //se quello che ha inserito l'utente è una stringa
                                                    //contenuta nell'array elencoCoupon allora esegui il codice dentro le graffe

        let prezzoScontato; //creo variabile per poterla usare anche fuori dal ciclo if

        if (nomeCoupon.value === 'sagra polenta') { //con valore 'sagra polenta' viene applicato sconto 50%
            prezzoScontato = parseInt(sommaPrezzi * 0.5);
        } else {                                    //gli altri valori di coupon applicano sconto 20%
            prezzoScontato = parseInt(sommaPrezzi * 0.8);
        }
        
        console.log(prezzoScontato); //stampo prezzo con sconto in innerHTML
        document.getElementById("prezzo-finale").innerHTML = prezzoScontato;
    
    } else {
        console.log(sommaPrezzi); //stampo prezzo standard senza sconti in innerHTML
        document.getElementById("prezzo-finale").innerHTML = 'Your price ' + sommaPrezzi + ' &euro;';
    }

}

})

