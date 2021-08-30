/*Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando
gli ingredienti proposti.
Consigli del giorno:
Create inizialmente un html base con gli elementi minimi necessari al funzionamento, passate poi alla parte JS ragionando come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
 console.log() è nostro amico!!!!.
Quando tutto funziona passate alla parte visiva lavorando al css.*/

let prezzoBase = 10;

let nomePanino = document.getElementById("nome-panino");

let bottoneCalcolatore = document.getElementById("bottone-calcolatore");

let elencoCoupon = ['sagra porchetta', 'sagra polenta', 'sagra porcini'];

let ingrediente = document.getElementsByClassName("ingrediente");
//console.log(ingrediente)

bottoneCalcolatore.addEventListener('click', function () {
    for (let i = 0; i < ingrediente.length; i++) {
        let ingredientiPaninoDesiderato = ingrediente[i];
        if (ingredientiPaninoDesiderato.checked) {
            let maggiorazioneIngrediente = 5;
            let prezzoFinaleMaggiorato = prezzoBase + maggiorazioneIngrediente;
            console.log(prezzoFinaleMaggiorato);
            }
            
        }


    
 }
)