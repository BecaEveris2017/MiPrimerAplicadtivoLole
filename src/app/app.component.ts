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

  AddColor(Color) {
    this.colores.push(Color.value);
    Color.value = '';
    return false;
  }
}
