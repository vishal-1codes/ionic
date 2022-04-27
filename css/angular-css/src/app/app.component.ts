import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-css';
  constructor(){
    console.log(window.getComputedStyle(document.documentElement).getPropertyValue("--text-color"))
  }
}
