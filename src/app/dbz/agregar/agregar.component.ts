import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  @Input() nuevo: Personaje= {
    nombre: 'Trunks',
    poder: 140
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService){
    
  }



agregar(){
  if (this.nuevo.nombre.trim().length == 0 ) { 
    console.log('Nombre no puede ser vacio');
    return;
  }

  //this.onNuevoPersonaje.emit(this.nuevo);


  this.dbzService.agregarPersonaje(this.nuevo);
  
  console.log(this.nuevo);
  this.nuevo = { nombre: '', poder: 0 }
  
}
}
