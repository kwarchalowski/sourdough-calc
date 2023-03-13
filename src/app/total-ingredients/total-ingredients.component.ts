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
    this.recalculateWeights();
  }

  recalculateWeights(): void {
    // TODO: they are not numbers?
    this.model.strongWhiteFlourBakers = 100 - this.model.flourType2Bakers - this.model.flourType3Bakers;
    this.strongWhiteFlourWeight = parseFloat(((this.doughWeight / (this.model.totalBakers()) * (this.model.strongWhiteFlourBakers)) * this.scale).toFixed(1));
    this.waterWeight = (this.doughWeight / (this.model.totalBakers()) * (this.model.waterBakers)) * this.scale;
    this.flourType2Weight = (this.doughWeight / (this.model.totalBakers()) * (this.model.flourType2Bakers)) * this.scale;
    this.flourType3Weight = (this.doughWeight / (this.model.totalBakers()) * (this.model.flourType3Bakers)) * this.scale;
    this.saltWeight = (this.doughWeight / (this.model.totalBakers()) * (this.model.saltBakers)) * this.scale;
    this.inclusion1Weight = (this.doughWeight / (this.model.totalBakers()) * (this.model.inclusion1Bakers)) * this.scale;
    this.inclusion2Weight = (this.doughWeight / (this.model.totalBakers()) * (this.model.inclusion2Bakers)) * this.scale;
    this.inclusion3Weight = (this.doughWeight / (this.model.totalBakers()) * (this.model.inclusion3Bakers)) * this.scale;
  };

}
