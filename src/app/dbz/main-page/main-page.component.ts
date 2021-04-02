import { Component, DefaultIterableDiffer } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{
  // personajes: Personaje[] = [];

  nuevo:Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  
  // public get personajes() : Personaje[] {
  //   return this.dbzService.personajes;
  // }

  //Inyección de dependencias (asi se maneja en angular con TS)
  constructor(private dbzService: DbzService) {
  }

}

  // ---> Basicamente, se dispara un evento desde el formulario y se recibe la información para imprimir en consola
  // ---> 
  // cambiarNombre(event:any){
  //   console.log(event.target.value);
  // }

  // cambiarPoder(event:any){
  //   console.log(event.target.value);
  // }

