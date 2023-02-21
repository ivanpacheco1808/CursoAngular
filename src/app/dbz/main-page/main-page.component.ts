import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  constructor( private dbzService: DbzService){}

  nuevo: Personaje= {
    nombre: 'Trunks',
    poder: 140
  }

  agregarPersonaje(event: Personaje){
    if (this.nuevo.nombre.trim().length == 0 ) { 
      console.log('Nombre no puede ser vacio');
      return;
    }

   // this.personajes.push(this.nuevo);

    this.nuevo = { nombre: '', poder: 0 }
    
  }

}
