import { ThrowStmt } from "@angular/compiler";
import { Component } from "@angular/core";

//TODO: El nombre del selector es, usualmente, el mismo nombre del componente (HeroComponent) pero sin la palabra "component"
//i.e.: "app-heroe"

//TODO: Concepto de One-way: solo cambia del componente a la plantilla.
//angular detecta si el estado de la plantilla cambia.
//Es decir, si una de las propiedades cambia en el componente, se van a cambiar en el template.
//Eficiencia: Angular detecta sólo las partes que cambian. En este caso, al prresionar el botón, revisa en el template las propiedades correspondientes.
//Recordar que template es "heroe.component.html"
@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Iron Man';
    edad:number = 45;

    obtenerNombre():string{
        return `${this.nombre} --- ${this.edad}`;
    }

    // TODO: Definicion de método en componente
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre = 'spiderman';
    }

    cambiarEdad():void{
        console.log('hey');
        
        this.edad = 28;
    }

}