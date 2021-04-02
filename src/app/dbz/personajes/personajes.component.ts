import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

//Componente hijo de main-page
//El input permite transferir propiedades de un componente padre a un componente hijo.
//Además, se le puede dar un alias. i.e., acá se pone data
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  // @Input('data') personajes:Personaje[] = [];
  get personajes():Personaje[]{
    return this.dbzService.personajes; //retornar el getter que se definió en el DbzService como privado
  }

    //Inyección de dependencias (asi se maneja en angular con TS)
    constructor(private dbzService: DbzService) {}
}
