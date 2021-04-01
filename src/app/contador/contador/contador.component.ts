import { Component } from "@angular/core";

//TODO: los decadores vienen siendo interfaces para objetos, interfaces para las clases. (?)
//Basicamente, los componentes exportan clases que se importan en un modulo. En este caso, es "app.module.ts"
//Importar decorador llamado "Component" del "@angular/core"
@Component({
    selector: 'app-contador',
    template: `
        <!-- ingresar JS con {{}} -->
        <!-- <h1>{{1+1}}</h1> -->
        <h1>hola mundo</h1>


        <!-- //Trabajar JS en archivo HTML con evento de click -->
        <h2>Diractamente con script en template</h2>
        <button (click)=" numero = numero + 1;">+ 1</button>

        <span>{{numero}}</span>

        <button (click)=" numero = numero - 1;">- 1</button>

        <hr>

        <!-- Implementar metodo de la instancia -->
        <h2>Invocando el método sumar()</h2>
        <button (click)="sumar()">+ 1</button>

        <span>{{numero}}</span>

        <button (click)="restar()">- 1</button>

        <hr>


        <!-- Implementar metodo de acumular -->
        <!-- Este aumenta de dos en dos -->
        <h2>Invocando el método acumular() de dos en dos</h2>
        <button (click)="acumular(+2)">+ 1</button>

        <span>{{numero}}</span>

        <button (click)="acumular(-2)">- 1</button>

        <!-- Implementar metodo de base -->
        <!-- Este aumenta de dos en dos -->
        <h2>Invocando el método acumular() de cinco en cinco</h2>
        <button (click)="acumular(base)">+ {{base}}</button>

        <span>{{numero}}</span>

        <button (click)="acumular(-base)">- {{base}}</button>
    
    `
})

export class ContadorComponent{

    title: string = 'Contador App';
    numero: number = 10;
    sumar = ()=>this.numero+=1;
    restar = ()=>{this.numero-=1;}
    base:number = 5;
    acumular(valor: number){
      valor 
      this.numero += valor;
    }
}