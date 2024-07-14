import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {
  megjelenit:boolean = true;
  megjelenitesKiBe():void{
    this.megjelenit = !this.megjelenit;
  }
}
