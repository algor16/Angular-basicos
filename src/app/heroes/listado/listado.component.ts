import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string [] = ['Spaiderman', 'Iroman', 'Superman', 'Capitan America', 'Thor'];
  hborrado:string='';

  borrarHeroe (){
    this.hborrado = this.heroes.splice(0,1).toString();  
  }
}
