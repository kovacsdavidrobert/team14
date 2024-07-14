import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrl: './data-biding.component.css'
})
export class DataBidingComponent {
  szoveg:string = "Szertem a programozást";
  kepcel:string = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png";
  uzenet():void{
    alert("Kovi projekt Angularban");
  }
  atir():void{
    this.szoveg = "Átírtam";
  }
  ketirany:string = "cica";
}
