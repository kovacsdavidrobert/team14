import { Component } from '@angular/core';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrl: './feladat.component.css'
})
export class FeladatComponent {
  vizsgaltSzam!:number;

  get aktualisEredmeny():string{
    if(this.vizsgaltSzam == undefined){
      return "";
    }
    if(this.isPrime(this.vizsgaltSzam)){
      return `A(z) ${this.vizsgaltSzam} PRÍM szám.`;
    }
    return `A(z) ${this.vizsgaltSzam} NEM prím szám.`;
  }

  eredmenyek:string[] = [];

  EredmenyMentes():void{
    this.eredmenyek.push(this.aktualisEredmeny);
  }

  isPrime(num:number):boolean{
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
}
