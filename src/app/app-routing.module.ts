import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalcFormComponent } from './calc-form/calc-form.component';

const routes: Routes = [
  {path: '', component: CalcFormComponent},
  {path: 'about', component: AboutComponent},
  {path: 'calc', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
