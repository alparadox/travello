import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ElementsComponent } from './elements/elements.component';
import { BenefitComponent } from './benefit/benefit.component';
import { TourComponent } from './tour/tour.component';
import { ButtonComponent } from './button/button.component';
import { PlanComponent } from './plan/plan.component';
import { SearchComponent } from './search/search.component';
import { TabsComponent } from './tabs/tabs.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ElementsComponent,
    BenefitComponent,
    TourComponent,
    ButtonComponent,
    PlanComponent,
    SearchComponent,
    TabsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
