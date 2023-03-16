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

  ingredientsWeights = this.breadComponents.getIngredientsWeights();
  model = this.breadComponents.getIngredients();

  //* init
  // strongWhiteFlourWeight: number = this.breadComponents.getIngredientsWeights().strongWhiteFlourWeight;
  // waterWeight: number = this.breadComponents.getIngredientsWeights().waterWeight;
  // flourType2Weight: number = this.breadComponents.getIngredientsWeights().flourType2Weight;
  // flourType3Weight: number = this.breadComponents.getIngredientsWeights().flourType3Weight;
  // saltWeight: number = this.breadComponents.getIngredientsWeights().saltWeight;
  // inclusion1Weight: number = this.breadComponents.getIngredientsWeights().inclusion1Weight;
  // inclusion2Weight: number = this.breadComponents.getIngredientsWeights().inclusion2Weight;
  // inclusion3Weight: number = this.breadComponents.getIngredientsWeights().inclusion3Weight;
  
  
  
  totalWeight: number = this.breadComponents.getTotalIngredientsWeight();

  ngOnInit() {
    this.breadComponents.castIngredientsWeights.subscribe(ingredientsWeights => this.ingredientsWeights = ingredientsWeights);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.recalculateWeights();
  }

  getIngredientsWeights(): any {
    return this.ingredientsWeights;
  }

  recalculateWeights(): void {

    this.breadComponents.updateMainDoughWeights();
    this.breadComponents.updateIngredientsWeights();

    this.model.strongWhiteFlourBakers = 100 - this.model.flourType2Bakers - this.model.flourType3Bakers;
    

    //! get rid of this  
    // this.ingredientsWeights.strongWhiteFlourWeight = parseFloat(this.breadComponents.getIngredientsWeights().strongWhiteFlourWeight.toFixed(1));
    // this.ingredientsWeights.waterWeight = parseFloat(this.breadComponents.getWaterWeight().toFixed(1));
    // this.ingredientsWeights.flourType2Weight = parseFloat(this.breadComponents.getFlourType2Weight().toFixed(1));
    // this.ingredientsWeights.flourType3Weight = parseFloat(this.breadComponents.getFlourType3Weight().toFixed(1));
    // this.ingredientsWeights.saltWeight = parseFloat(this.breadComponents.getSaltWeight().toFixed(1));
    // this.ingredientsWeights.inclusion1Weight = parseFloat(this.breadComponents.getInclusion1Weight().toFixed(1));
    // this.ingredientsWeights.inclusion2Weight = parseFloat(this.breadComponents.getInclusion2Weight().toFixed(1));
    // this.ingredientsWeights.inclusion3Weight = parseFloat(this.breadComponents.getInclusion3Weight().toFixed(1));


    this.totalWeight = Math.round(parseFloat((this.breadComponents.getTotalIngredientsWeight()).toFixed(1)));
  };

}
