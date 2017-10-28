import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Jose Dolores Resendiz'
  colores = ['negro', 'rojo', 'azul']
  mostrar = false;
  status = 'Mostrar';
  
  AddColor(Color) {
    this.colores.push(Color.value);
    Color.value = '';
    return false;
  }
  DesplegarArray() {
    this.mostrar = !this.mostrar;
    if (this.status == 'Ocultar') {
      this.status = 'Mostrar';
    }
    else {
      this.status = 'Ocultar';
    }

  }
}
