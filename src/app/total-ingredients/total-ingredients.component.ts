import { Component, Input, SimpleChanges } from '@angular/core';
import { BreadComponentsService } from '../services/bread-components.service';
import { Ingredients } from '../ingredients';
import { MainDough } from '../main-dough';

@Component({
  selector: 'app-total-ingredients',
  templateUrl: './total-ingredients.component.html',
  styleUrls: ['./total-ingredients.component.scss']
})
export class TotalIngredientsComponent {

  @Input() doughWeight = 0;
  @Input() levain = 0;
  @Input() scale = 0;

  constructor(private breadComponents: BreadComponentsService) { }

  model: Ingredients = this.breadComponents.getIngredients();
  ingredientsWeights: any = this.breadComponents.getIngredientsWeights();
  totalWeight: number = this.breadComponents.getTotalIngredientsWeight();

  ngOnInit(): void {
    this.breadComponents.castIngredientsWeights.subscribe(ingredientsWeights => this.ingredientsWeights = ingredientsWeights);
    this.breadComponents.castIngredients.subscribe(ingredients => this.model = ingredients);
    this.recalculateWeights();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.recalculateWeights();
  }

  recalculateWeights(): void {
    this.model.strongWhiteFlourBakers = 100 - this.model.flourType2Bakers - this.model.flourType3Bakers;
    this.updateMainDough();
    this.breadComponents.recalculateWeights();
    this.totalWeight = this.breadComponents.getTotalIngredientsWeight();
  }

  updateMainDough(): void {
    const mainDough = new MainDough(
      this.model.strongWhiteFlourBakers,
      this.model.waterBakers,
      this.model.saltBakers,
      this.model.flourType2Bakers,
      this.model.flourType3Bakers,
      this.breadComponents.getRecipeFormula().levain,
      this.model.inclusion1Bakers,
      this.model.inclusion2Bakers,
      this.model.inclusion3Bakers
    );

    this.breadComponents.setMainDough(mainDough);
  }
}
