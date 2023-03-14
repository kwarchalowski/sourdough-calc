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

  //* init
  strongWhiteFlourWeight: number = 0;
  waterWeight: number = 0;
  flourType2Weight: number = 0;
  flourType3Weight: number = 0;
  saltWeight: number = 0;
  inclusion1Weight: number = 0;
  inclusion2Weight: number = 0;
  inclusion3Weight: number = 0;
  totalWeight: number = 0;

  ngOnInit() {
    this.recalculateWeights();
  }

  ngOnChanges(changes: SimpleChanges) {
    //this.recalculateWeights();
  }


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

    var ingredientsPairs = [
      {
        bakers: this.model.strongWhiteFlourBakers,
        weight: this.strongWhiteFlourWeight
      },
      {
        bakers: this.model.waterBakers,
        weight: this.waterWeight
      },
      {
        bakers: this.model.flourType2Bakers,
        weight: this.flourType2Weight
      },
      {
        bakers: this.model.flourType3Bakers,
        weight: this.flourType3Weight
      },
      {
        bakers: this.model.saltBakers,
        weight: this.saltWeight
      },
      {
        bakers: this.model.inclusion1Bakers,
        weight: this.inclusion1Weight
      },
      {
        bakers: this.model.inclusion2Bakers,
        weight: this.inclusion2Weight
      },
      {
        bakers: this.model.inclusion3Bakers,
        weight: this.inclusion3Weight
      }
    ]

    this.totalWeight = ingredientsPairs.reduce((acc, ingredient) => acc + ingredient.weight, 0);
  };

}
