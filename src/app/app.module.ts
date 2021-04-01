import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { contadorModule } from './contador/contador.module';

//TODO: Cuando se crea un componente, tiene que estar importando en un modulo
//Incluir los componentes que serán parte del modulo.
//Acá se incluyó "ContadorComponent". Se importan automaticamente por la extensión
@NgModule({
  declarations: [ //Se colocan componentes
    AppComponent,
  ],
  imports: [ //Se colocan otros módulos. Siempre habrá un modulo en import
    BrowserModule,
    // HeroesModule,
    contadorModule
  ],
  providers: [], //Servicios especificos a un módulo
  bootstrap: [AppComponent] //Componente principal al que se quiere enlazar. Este se pone automáticamente
})
export class AppModule { }
