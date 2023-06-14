import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { RecipeViewerComponent } from './recipe-viewer/recipe-viewer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: CalcFormComponent},
  {path: 'about', component: AboutComponent},
  {path: 'calc', redirectTo: '', pathMatch: 'full'},
  {path: 'recipe/:id', component: RecipeViewerComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
