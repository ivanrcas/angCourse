import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[ //esta es la sorpresa del huevo kinder, es decir, componentes incrustados
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ //Solo queremos mostrar al públic este componente
        ListadoComponent
    ],
    imports:[
        CommonModule //El commonModule sirve para utiliar directivas como ngFor o ngIf en los componentes
    ]
})
export class HeroesModule {}