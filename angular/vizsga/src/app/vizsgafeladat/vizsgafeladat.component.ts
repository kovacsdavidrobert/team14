import { Component } from '@angular/core';

@Component({
  selector: 'app-vizsgafeladat',
  templateUrl: './vizsgafeladat.component.html',
  styleUrl: './vizsgafeladat.component.css'
})
export class VizsgafeladatComponent {
  megadottSuly!:number;
  megadottMagassag!:number;
  tti!:number;
  adatok:string[] = [];
  
  EredmenyMentes():void{
    this.adatok.push(`Súly: ${this.megadottSuly}, magasság: ${this.megadottMagassag}, TTI: ${ this.megadottSuly / this.megadottMagassag**2}`);
  }
  
  szamol():void{
    if(this.megadottSuly > 0 && this.megadottMagassag > 0){
      this.tti = this.megadottSuly / this.megadottMagassag**2;
    }
  }
}
