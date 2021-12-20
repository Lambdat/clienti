export interface Cliente {
  id: number|null;
  nome: string;
  cognome: string;
  email: string;
  indirizzo: string;
  citta: string;
  provincia: string;
  cap: number;
}
/*
  per js l'interfaccia vede sia i comportamenti sia i dati
*/



let obj={
  id:null,
  nome:"antonio",
  cognome:"orefice",
  email: "orefice@postecert.it",
  indirizzo: "via agnesi",
  citta: "caserta",
  provincia: "caserta",
  cap: 811

}
//il tiping di typescript/javascript non è rigido ma funzionale
let x:Cliente=obj;

interface Anatra{
  canta:() => void
}

class MyAnatra implements Anatra {
  canta = () => console.log("Squeak");

}

function usa(x:Anatra):void{

  x.canta();

}