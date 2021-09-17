console.log('argomento nuovo: le Classi in JS');
/* ************************
la CLASSE: 
è astratta, non ha nessun riscontro pratico!!
è la descrizione/modello di un qualcosa che conretamente non esiste, ha tutte le caratteristiche
indicate tramite proprietà e metodi */
class Persona{
    /*  nel costruttore: 
    passo solo i valori necessari per valorizzare le proprietà della mia classe */
    constructor(nome, cognome){
        this.nome = nome; //**** proprietà
        this.cognome = cognome;
        this._email = '';
        this.indirizzo = '';
    }
    mostraNomeCompleto(){ //**** metodo
        return this.nome + ' ' + this.cognome;
    }
    //setter ASSEGNA UN VALORE
    set email(value){
        this._email = value;
    }
    //getter LO RECUPERA
    get email(){
        return this._email;
    }
};
/* *******************************
l'OGGETTO:
è l'istanza di questa classe
si attivano le definizioni della Classe quando vado a fare cosi: */
let persona = new Persona('Elena', 'Dias');
console.log(persona.mostraNomeCompleto());
//qua vado a settare l'email
persona.email = 'pippo@email.com';
console.log(persona.email);


/* *******************************
//ESTENSIONE DELLA CLASSE:
/* Molto utile quando vogliamo aggiungere proprietà
e metodi senza dover duplicare migliaia di volte la
class Persona, così l'estensione eredita tutte le
caratteristiche e con l'extend ne aggiunge di nuove */
class Studente extends Persona{
    corsi = [];
};
let studente = new Studente('Paolo', 'Rossi');
console.log(studente.mostraNomeCompleto() );
studente.corsi = ['Front End Dev Junior', 'HTML Specialist', 'Angular Developer'];
console.log(studente.corsi);

//  *****
class Docente extends Persona {
    materie = [];
};
let docente = new Docente('Luca', ' Neri');
docente.materie=['JsavaScript', 'NodeJS'];
console.log(docente.materie);


/*
function Persona(){} -> 
creiamo direttamente l'OGGETTO

class Persona {} -> 
definiamo la Classe e successivamente creo l'oggetto
con la keyword new

sono i due approcci JavaScript alternativi, che
appartengono a due epoche js diverse, versione con
class è l'approccio più moderno
*/


/* Esempio: OGGETTO nativo js: WINDOW 
ha delle proprietà
.innerWidth mostra la larghezza della nostra finestra */
// console.log(window);
// console.log(window.innerWidth); 