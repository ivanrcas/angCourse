import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
 
  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService){}

  //Los outputs funcionan para emitir eventos. Recordar poner el tipo evento que se desea emitir
  //i.e. EventEmitter<Personaje>
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){

    if(this.nuevo.nombre.trim().length === 0){return;}

    console.log('emite hijo: ', this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    
    //Se emite el objeto de tipo Personaje con el EventEmitter
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

    //Imprimir array de personajes    

  }

}
