import { Component } from '@angular/core';

import { RecipeFormula } from '../recipe-formula';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.scss']
})
export class CalcFormComponent {

  model = new RecipeFormula(800, 10, 1);

  submitted = false;

  onSubmit() { this.submitted = true; }

}
