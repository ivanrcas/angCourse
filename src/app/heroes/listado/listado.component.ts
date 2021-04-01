//TODO: comando para crear componente de manera automática: ng g c heroes/listado
//Importante: ubicarse con cd en la ubicación del directoria donde se quieren crear los archivos

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Hulk', 'Batman'];
  heroeBorrado: string = '';
  heroeString: string[] =[];

  borrarHeroe(){
    const heroeBorrado = this.heroes.shift() || '';
    console.log(heroeBorrado);
    this.heroeString.push(heroeBorrado);
  }
  
  
  // public get imprimirHeroeBorrado() : string[] {
  //   return this.heroeString;
  // }
  
  

}
