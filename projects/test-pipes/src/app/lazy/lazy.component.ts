import { Component } from '@angular/core';

@Component({
  template: `
    <br>
    {{ date | console }}
    {{ date | debugger }}
    <br>
  `
})
export class LazyComponent { 
  public date = new Date();
}
