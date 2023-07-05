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
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LangSwitcherComponent } from './lang-switcher/lang-switcher.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { FrdService } from './frd.service';
import { UploadRecipeComponent } from './upload-recipe/upload-recipe.component';
import { AutofocusDirective } from './autofocus.directive';
import { RecipeViewerComponent } from './recipe-viewer/recipe-viewer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
// import { RecaptchaComponent } from './recaptcha/recaptcha.component';


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
    LangSwitcherComponent,
    SpinnerComponent,
    UploadRecipeComponent,
    AutofocusDirective,
    RecipeViewerComponent,
    PageNotFoundComponent,
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
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    RecaptchaV3Module,
  ],
  providers: [BreadComponentsService, UseLocalStorageService, FrdService, { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha.siteKey}, { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})

export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}