import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from 'src/Cliente';
import { ClientiService } from '../clienti.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css']
})
export class InserimentoComponent implements OnInit {

  constructor(private service:ClientiService) { }

  ngOnInit(): void {
  }
/*
  private c1:Cliente={
    id:null,
    nome:"antonio",
    cognome:"orefice",
    email: "orefice@postecert.it",
    indirizzo: "via agnesi",
    citta: "caserta",
    provincia: "ce",
    cap: 81100
  };
*/

//Validatori per evitare caratteri e formati mal inseriti
vmail = [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")];
vnum = [Validators.required, Validators.pattern("[0-9]+")];
valfa = [Validators.required, Validators.pattern("[a-zA-Z0-9, ]+")];
vprov = [Validators.required, Validators.pattern("[A-Z]+"),Validators.maxLength(2)];

  id = new FormControl(); //FormControl => input 
  nome = new FormControl("",this.valfa);
  cognome = new FormControl("",this.valfa);
  email = new FormControl("",this.vmail);
  indirizzo = new FormControl("",this.valfa);
  citta = new FormControl("",this.valfa);
  provincia = new FormControl("",this.vprov);
  cap = new FormControl("",this.vnum);

  clienteForm = new FormGroup( // FormGroup  
    {
    id:this.id,
    nome:this.nome,
    cognome:this.cognome,
    email:this.email,
    indirizzo:this.indirizzo,
    citta:this.citta,
    provincia:this.provincia,
    cap:this.cap
  });


  inserisci(event:Event)
  {
    console.log(event.target);
    
    const cliente={

      id:this.id.value,
      nome:this.nome.value,
      cognome:this.cognome.value,
      email:this.email.value,
      indirizzo:this.indirizzo.value,
      citta:this.citta.value,
      provincia:this.provincia.value,
      cap:this.cap.value

    }


    this.service
    .create(cliente)
    .subscribe({ 
            //METODI SUBSCRIPTOR
      next : (cliente) => this.displayTuttoBene(cliente), // as Cliente
      error : (err) => this.displayError(err),      
      complete : () => console.log("Stream Esaurito")     
    });

  }

  messaggio="";
  displayError(error:any){
    this.messaggio = `Errore Rilevato!: ${error}`;
  }

  displayTuttoBene(cliente:Cliente){
    this.clienteForm.setValue(cliente);
    this.messaggio = `Cliente ${cliente.nome} ${cliente.cognome} inserito con ID: ${cliente.id}`
  }


  



   pulisci(event:Event){
      this.clienteForm.reset(); //puliamo l'intero FormGroup
   }

      //let x= {"id":39,"nome":"antonio","cognome":"orefice","email":"orefice@postecert.it","indirizzo":"via agnesi","citta":"caserta","provincia":"ce","cap":81100};











  }

