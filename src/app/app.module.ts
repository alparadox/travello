import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ElementsComponent } from './elements/elements.component';
import { BenefitComponent } from './benefit/benefit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ElementsComponent,
    BenefitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
