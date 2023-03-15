import { Component } from '@angular/core';
import { BreadComponentsService } from '../bread-components.service';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.scss']
})
export class CalcFormComponent {

  constructor(private breadComponents: BreadComponentsService) {}

  model = this.breadComponents.getRecipeFormula();

}
