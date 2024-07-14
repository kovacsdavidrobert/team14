import { Component } from '@angular/core';

@Component({
  selector: 'app-logolo',
  templateUrl: './logolo.component.html',
  styleUrl: './logolo.component.css'
})
export class LogoloComponent {
  lista:string[] = [];
  ujTermek!:string;

  hozzaad():void{
    this.lista.push(this.ujTermek);
  }
}
