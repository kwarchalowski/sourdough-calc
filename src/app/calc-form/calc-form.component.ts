import { Attribute, Component, SimpleChanges } from '@angular/core';
import { BreadComponentsService } from '../services/bread-components.service';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.scss']
})
export class CalcFormComponent {

  

  constructor(private breadComponents: BreadComponentsService) { }

  model = this.breadComponents.getRecipeFormula();


  ngOnChanges(changes: SimpleChanges): void {
    this.model = this.breadComponents.getRecipeFormula();
  }
  
  updateFormula(): void {
    this.model = this.breadComponents.getRecipeFormula();
  }

  saveToLocalStorage(): void {
    this.breadComponents.saveToLocalStorage();
  }

  loadFromLocalStorage(): void {
    this.breadComponents.loadFromLocalStorage();
    this.updateFormula();
  }
}
