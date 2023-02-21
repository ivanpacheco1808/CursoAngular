import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {
  
    get personajes(): Personaje[]{
        return [...this._personajes];
    }

  private _personajes: Personaje[] = [
    {
      nombre: 'GOKU',
      poder: 15000
    },
    {
      nombre: 'VEGETA',
      poder: 7500
    }
    
  ];

    constructor(){
        console.log('Servicio inicializado');
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}