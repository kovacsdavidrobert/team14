import { Component } from '@angular/core';

@Component({
  selector: 'app-tablazat',
  templateUrl: './tablazat.component.html',
  styleUrl: './tablazat.component.css'
})
export class TablazatComponent {
  tab = [
    {elso: 1, masodik: 2},
    {elso: 11, masodik: 22},
    {elso: 111, masodik: 222}

  ];
}
