import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  lista: any;

  constructor() {
    // montar o array json lista
    this.lista = [
     {
       "name":"Black Desert",
       
     },
     {
      "name":"Perfect World",
     
     },
     {
      "name":"Mu online",
     
     },
     {
      "name":"Forsaken",
      
     },
     {
      "name":"Grande Chase" ,
      
    },
    
    {
      "name":"Lunia" ,
    
    }
    ];
  }

  ngOnInit(){

  }

  mostra(item: string){
    const exibir = item;
    console.log(exibir);
  }

}
