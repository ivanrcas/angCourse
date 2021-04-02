import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


//orden del codigo: Propidades, gets y setters, constructor y por ultimo, los métodos
@Injectable()
export class DbzService{

    //Guión bajo (_) indica que es una propiedad privada

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Veggeta',
          poder: 8500
        }
      ];

      
      public get personajes() : Personaje[] {
          //Como JS pasa todo por referencia, con spread(...) podemos ampliar/partir los objetos del arreglo _personajes
          return [...this._personajes];
      }
      

    constructor(){ }

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }

}