import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { BodyComponent } from './body/body.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LangSwitcherComponent } from './lang-switcher/lang-switcher.component';


@NgModule({
  declarations: [
    AppComponent,
    CalcFormComponent,
    TotalIngredientsComponent,
    FermentsComponent,
    MainDoughComponent,
    SidenavComponent,
    AboutComponent,
    BodyComponent,
    LangSwitcherComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [BreadComponentsService, UseLocalStorageService],
  bootstrap: [AppComponent]
})

export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}