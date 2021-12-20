import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  //http rimane in ascolto
  constructor(private http : HttpClient) { }

  private clienti: Cliente[] = [{ "id": 11, "nome": "Tommaso", "cognome": "Albinoni", "email": "albinoni@gmail.com", "indirizzo": "Via Roma", "citta": "Castione della Presolana", "provincia": "BG", "cap": 24020 }, { "id": 5, "nome": "Vincenzo", "cognome": "Bellini", "email": "bellini@bellini.org", "indirizzo": "Piazza San Francesco dâ??Assisi, 3", "citta": "Catania", "provincia": "CT", "cap": 95100 }, { "id": 15, "nome": "Arrigo", "cognome": "Boito", "email": "arrigob@aol.com", "indirizzo": "Via Cavour, 17", "citta": "Padova", "provincia": "PD", "cap": 35100 }, { "id": 13, "nome": "Vincenzo", "cognome": "Capecelatro", "email": "vin.cap@libero.it", "indirizzo": "Via Po, 22", "citta": "Napoli", "provincia": "NA", "cap": 80100 }, { "id": 16, "nome": "Luigi", "cognome": "Cherubini", "email": "lcherubini@gmail.com", "indirizzo": "Via Ricasoli, 10", "citta": "Firenze", "provincia": "FI", "cap": 50100 }, { "id": 14, "nome": "Francesco", "cognome": "Cilea", "email": "fcilea@cilea.it", "indirizzo": "Via Cilea, 1", "citta": "Palmi", "provincia": "RC", "cap": 89015 }, { "id": 10, "nome": "Arcangelo", "cognome": "Corelli", "email": "acor@spalfans.it", "indirizzo": "Piazza Roma, 18", "citta": "Fusignano", "provincia": "RA", "cap": 48032 }, { "id": 17, "nome": "Giovanni Pierluigi", "cognome": "Da Palestrina", "email": "gpp@gmail.com", "indirizzo": "Via Cenreo, 2", "citta": "Palestrina", "provincia": "RM", "cap": 36 }, { "id": 4, "nome": "Gaetano", "cognome": "Donizetti", "email": "gaetano@walla.com", "indirizzo": "Via Don Luigi Palazzolo, 88", "citta": "Bergamo", "provincia": "BG", "cap": 24122 }, { "id": 18, "nome": "Tarquinia", "cognome": "Molza", "email": "tarquinia@libero.it", "indirizzo": "Via Parma, 72", "citta": "Modena", "provincia": "MO", "cap": 41121 }, { "id": 8, "nome": "Claudio", "cognome": "Monteverdi", "email": "34566@libero.it", "indirizzo": "Piazza del Duomo, 1", "citta": "Cremona", "provincia": "CR", "cap": 26100 }, { "id": 12, "nome": "Giovanni Battista", "cognome": "Pergolesi", "email": "gbattista.draghi@jesimusiva.org", "indirizzo": "Piazza Ghislieri, 4", "citta": "Jesi", "provincia": "AN", "cap": 60035 }, { "id": 9, "nome": "Amilcare", "cognome": "Ponchielli", "email": "aponchielli@aol.com", "indirizzo": "Piazza Revellino, 3", "citta": "Paderno Ponchielli", "provincia": "CR", "cap": 26024 }, { "id": 3, "nome": "Giacomo", "cognome": "Puccini", "email": "gpuccini@gmail.com", "indirizzo": "Corte San Lorenzo, 9 ", "citta": "Lucca", "provincia": "LU", "cap": 55100 }, { "id": 2, "nome": "Gioacchino", "cognome": "Rossini", "email": "gioacchino@libero.it", "indirizzo": "Via del Duomo", "citta": "Pesaro", "provincia": "PU", "cap": 61122 }, { "id": 7, "nome": "Domenico", "cognome": "Scarlatti", "email": "dscarlatti@mail.partenope.it", "indirizzo": "Rion del boh, 33", "citta": "Napoli", "provincia": "NA", "cap": 80100 }, { "id": 19, "nome": "Andres", "cognome": "Segovia Torres", "email": "andres.s@segovia.es", "indirizzo": "Villacarrillo, 133", "citta": "Linares", "provincia": "JA", "cap": 23700 }, { "id": 1, "nome": "Giuseppe", "cognome": "Verdi", "email": "gverdi@aol.com", "indirizzo": "Roncole Verdi", "citta": "Busseto", "provincia": "PR", "cap": 43011 }, { "id": 6, "nome": "Antonio", "cognome": "Vivaldi", "email": "antonio.vivaldi@vivaldi.com", "indirizzo": "Rion del boh, 33", "citta": "Venezia", "provincia": "VE", "cap": 30100 }];

  //bisogna usare il http client 
  private clientiURL= "http://localhost:8080/web01/cs?out=json";
  private clientiAddURL="http://localhost:8080/web01/cs";
  readClienti () {    
    return this.clienti; // Scaffold
  }

  //rimpiazzo dei dati di tipo Observable(Sorgente dei Dati), quando i dati sono pronti c'è li restiuisce altrimenti rimanda
  findAllClienti(){
    return this.http.get<any>(this.clientiURL); // chiamata asincrona
  }


  create(c:Cliente){
    const headears = {"ContentType":"application/json"};
    const body = JSON.stringify(c);
    return this.http.post<Cliente>(this.clientiAddURL,body,{});
  }


}
