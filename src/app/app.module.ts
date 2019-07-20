import 'ng-debug-pipes';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,

    RouterModule.forRoot([{
      path: 'lazy', 
      loadChildren: async () => {
        const { LazyModule } = await import('./lazy/lazy.module');
        return LazyModule;
      }
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
