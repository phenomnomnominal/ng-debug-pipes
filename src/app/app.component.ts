import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="./lazy">LAZY</a>
    <br>
    {{ date | console }}
    {{ date | debugger }}
    <br>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { 
  public date = new Date();
}
