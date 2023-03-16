import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BreadComponentsService } from '../bread-components.service';

@Component({
  selector: 'app-total-ingredients',
  templateUrl: './total-ingredients.component.html',
  styleUrls: ['./total-ingredients.component.scss']
})
export class TotalIngredientsComponent implements OnChanges {

  @Input() doughWeight = 0;
  @Input() levain = 0;
  @Input() scale = 0;

  constructor(private breadComponents: BreadComponentsService) { }

  model = this.breadComponents.getIngredients();
  ingredientsWeights: any = this.breadComponents.getIngredientsWeights();
  totalWeight: number = this.breadComponents.getTotalIngredientsWeight();

  ngOnInit(): void {
    this.breadComponents.castIngredientsWeights.subscribe(ingredientsWeights => this.ingredientsWeights = ingredientsWeights);
    this.recalculateWeights();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.recalculateWeights();
  }

  recalculateWeights(): void {

    this.breadComponents.updateMainDoughWeights();
    this.breadComponents.updateIngredientsWeights();
    this.breadComponents.updateFermentsWeights();

    this.model.strongWhiteFlourBakers = 100 - this.model.flourType2Bakers - this.model.flourType3Bakers;
    
    this.totalWeight = this.breadComponents.getTotalIngredientsWeight();
  };

}
