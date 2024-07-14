import { Component } from '@angular/core';

@Component({
  selector: 'app-vizsgafeladat',
  templateUrl: './vizsgafeladat.component.html',
  styleUrl: './vizsgafeladat.component.css'
})
export class VizsgafeladatComponent {
  htmlModul!:number;
  bootModul!:number;
  jsModul!:number;
  tsModul!:number;
  ngModul!:number;
  nodeModul!:number;
  eredmenyek:string[]= [];

  getSum():number{
    return (this.htmlModul + 
           this.bootModul +
           this.jsModul +
           this.tsModul + 
           this.ngModul + 
           this.nodeModul) || 0;
  }
  mentes():void{
    if(String(this.htmlModul).length == 0 || 
       String(this.bootModul).length == 0 ||
       String(this.jsModul).length == 0 ||
       String(this.tsModul).length == 0 ||
       String(this.ngModul).length == 0 ||
       String(this.nodeModul).length == 0){
         alert('Az összes mező kitöltése kötelező!');
         return;
      }
      let szoveg:string = "";
      if(this.getSum()< 50)
        szoveg = "Sikertelen vizsga, összpontszám: ";
      else if(this.getSum() < 60)
        szoveg = "Sikeres vizsga, (2-es) összpontszám: ";
      else if(this.getSum() < 70)
        szoveg = "Sikeres vizsga, (3-as) összpontszám: ";
      else if(this.getSum() < 80)
        szoveg = "Sikeres vizsga, (4-es) összpontszám: ";
      else
        szoveg = "Sikeres vizsga, (5-ös) összpontszám: ";

      szoveg += this.getSum();
      this.eredmenyek.push(szoveg);
  }
}
