import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', ' Thor', 'Capitán América'];
  heroeBorrado: string = '';
  
  borrarHeroe() {
    this.heroeBorrado = this.heroes.splice(0, 1)[0] || '';
    // console.log(heroeBorrado);
  }

}
