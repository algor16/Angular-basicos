import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';

@NgModule({
    declarations:[
        HeroeComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        HeroeComponent
    ]
})
export class HeroesModule{

}