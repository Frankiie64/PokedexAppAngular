import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  @Input() sideNavStatus: boolean = false;

  list = [
    {
      name:'Home',
      icon:'fa-solid fa-house'
    }
    ]



}
