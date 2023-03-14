import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ingredients } from '../ingredients';

@Component({
  selector: 'app-total-ingredients',
  templateUrl: './total-ingredients.component.html',
  styleUrls: ['./total-ingredients.component.scss']
})
export class TotalIngredientsComponent implements OnChanges {
  
  @Input() doughWeight = 0;
  @Input() scale = 0;

  
  model = new Ingredients(100, 70, 2, 0, 0, 0, 0, 0);

  strongWhiteFlourWeight = 0;
  waterWeight = 0;
  flourType2Weight = 0;
  flourType3Weight = 0;
  saltWeight = 0;
  inclusion1Weight = 0;
  inclusion2Weight = 0;
  inclusion3Weight = 0;

  ngOnInit() {
    this.recalculateWeights();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    //this.recalculateWeights();
  }

  //* that's for map
  ingredientsPairs = [
    {
      bakers: this.model.strongWhiteFlourBakers,
      weight: this.strongWhiteFlourWeight
    },
    {
      bakers: this.model.strongWhiteFlourBakers,
      weight: this.strongWhiteFlourWeight
    },
    {
      bakers: this.model.strongWhiteFlourBakers,
      weight: this.strongWhiteFlourWeight
    },
    {
      bakers: this.model.strongWhiteFlourBakers,
      weight: this.strongWhiteFlourWeight
    },
    {
      bakers: this.model.strongWhiteFlourBakers,
      weight: this.strongWhiteFlourWeight
    },
    {
      bakers: this.model.strongWhiteFlourBakers,
      weight: this.strongWhiteFlourWeight
    },
    {
      bakers: this.model.strongWhiteFlourBakers,
      weight: this.strongWhiteFlourWeight
    },
    {
      bakers: this.model.strongWhiteFlourBakers,
      weight: this.strongWhiteFlourWeight
    }
  ]

  // TODO: find out how to sum all of the ingredients
  totalBakers: number = this.ingredientsPairs.reduce((acc, ingredient) => acc + ingredient.bakers, 0);
  totalWeight: number = this.ingredientsPairs.reduce((acc, ingredient) => acc + ingredient.weight, 0);
  
  recalculateWeights(): void {

    // TODO: think about map.reduce
    // this.ingredientsPairs.forEach(ingredient => console.log(ingredient.weight));

    // this.ingredientsPairs.map(ingredient => ingredient.weight = parseFloat(((this.doughWeight / (this.totalBakers) * (ingredient.bakers)) * this.scale).toFixed(1)));
    // console.log('after: ' + this.ingredientsPairs);
    
    this.model.strongWhiteFlourBakers = 100 - this.model.flourType2Bakers - this.model.flourType3Bakers;

    this.strongWhiteFlourWeight = parseFloat(((this.doughWeight / (this.model.totalBakers()) * (this.model.strongWhiteFlourBakers)) * this.scale).toFixed(1));
    this.waterWeight = parseFloat(((this.doughWeight / (this.model.totalBakers()) * (this.model.waterBakers)) * this.scale).toFixed(1));
    this.flourType2Weight = parseFloat(((this.doughWeight / (this.model.totalBakers()) * (this.model.flourType2Bakers)) * this.scale).toFixed(1));
    this.flourType3Weight = parseFloat(((this.doughWeight / (this.model.totalBakers()) * (this.model.flourType3Bakers)) * this.scale).toFixed(1));
    this.saltWeight = parseFloat(((this.doughWeight / (this.model.totalBakers()) * (this.model.saltBakers)) * this.scale).toFixed(1));
    this.inclusion1Weight = parseFloat(((this.doughWeight / (this.model.totalBakers()) * (this.model.inclusion1Bakers)) * this.scale).toFixed(1));
    this.inclusion2Weight = parseFloat(((this.doughWeight / (this.model.totalBakers()) * (this.model.inclusion2Bakers)) * this.scale).toFixed(1));
    this.inclusion3Weight = parseFloat(((this.doughWeight / (this.model.totalBakers()) * (this.model.inclusion3Bakers)) * this.scale).toFixed(1));
  };

}
