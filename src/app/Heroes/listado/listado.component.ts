import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent   {
  ElementoBorrado: string = '';
  heroes: string[]  = ['Spiderman','IronMan','Hulk','Thor']

  borrarheroe() {
    this.ElementoBorrado=this.heroes.shift() || '';
  }
}
