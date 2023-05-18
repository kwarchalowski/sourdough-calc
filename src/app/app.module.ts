import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { TotalIngredientsComponent } from './total-ingredients/total-ingredients.component';
import { FermentsComponent } from './ferments/ferments.component';
import { BreadComponentsService } from './services/bread-components.service';
import { MainDoughComponent } from './main-dough/main-dough.component';
import { UseLocalStorageService } from './services/use-local-storage.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcFormComponent,
    TotalIngredientsComponent,
    FermentsComponent,
    MainDoughComponent,
    SidenavComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BreadComponentsService, UseLocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
