import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //El selector es el nombre donde se está inyectando
  templateUrl: 'app.component.html' //Si el componente html está en la misma carpeta
  // template: '<span>Hola por template</span>';
  
  // template: `
  // <h1>Hola de nuevo</h1>

  // `
})

//TODO: Es importante que la lógica se escriba en el componente de TS, y no en el template de HTML
//Lo que está acá, es una instancia del AppComponent
export class AppComponent {

}
