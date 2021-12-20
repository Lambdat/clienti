import { Component, OnInit } from '@angular/core';
import { ClientiService } from '../clienti.service';
import { Cliente } from 'src/Cliente';

@Component({
  selector: 'app-lista-clienti',
  templateUrl: './lista-clienti.component.html',
  styleUrls: ['./lista-clienti.component.css']
})
export class ListaClientiComponent implements OnInit {

  constructor(private service:ClientiService) { }

 

  clienti:Cliente[] = [];
  

  ngOnInit(): void {
    //this.clienti=this.service.readClienti();
    this.service.findAllClienti() //Abbiamo un Observable, oggetto che richede dati in maniera asincrona
                .subscribe(dati => this.clienti=dati);

  }


  elimina(indice : any){
    console.log(`indice ricevuto= ${indice}`);

  }
  
}
