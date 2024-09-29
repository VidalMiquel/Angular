import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCvModule } from './my-cv/my-cv.module'; // Ensure HeaderModule is included in MyCvModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCvModule  // Make sure MyCvModule includes all necessary components/modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
