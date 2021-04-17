import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 dadoIzquiera='../assets/img/dice1.png'
 dadoDerecha='../assets/img/dice4.png'
 numero1:number = 4;
 numero2:number = 6;

 tirarDados():void{

   this.numero1= Math.round(Math.random() * 5) + 1 ;
   this.numero2= Math.round(Math.random() * 5) + 1;

   this.dadoIzquiera = '../assets/img/dice' + this.numero1 + '.png';
   this.dadoDerecha = '../assets/img/dice' + this.numero2 + '.png';
 }

}
