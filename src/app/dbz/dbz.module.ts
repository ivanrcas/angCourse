//TODO: Primero se ponen las importanciones de angular, luego las de terceros y por ultimas, las propias del proyectos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';

//TODO: Los modulos importados (imports) no se cargan más de una vez. Como estos modulos son encapsulados, 
//las cargas de importe es el mismo.

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[ //Los providers son los servicios y que sirven como singleton (una clase instanciada globalmente)
    DbzService
  ]
})
export class DbzModule { }
