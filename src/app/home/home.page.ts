import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Temperatura: number = 100;

  constructor() {}

  cambioTem(Temperatura: number) {
    this.Temperatura = Temperatura;
  }
  getColor(temperatura: number): string {
    if (temperatura >= 0 && temperatura <= 15) {
      return 'blue';
    } else if (temperatura >= 16 && temperatura <= 30) {
      return 'green';
    } else if (temperatura >= 31 && temperatura <= 50) {
      return 'orange';
    } else if (temperatura >= 51 && temperatura <= 70) {
      return 'tomato';
    } else {
      return 'red';
    }
  }
  cambioTem2(event: any) {
    console.log('Nuevo valor de temperatura:', event.detail.value);
    // Aquí puedes realizar acciones adicionales según el valor seleccionado
  }
  
  }
