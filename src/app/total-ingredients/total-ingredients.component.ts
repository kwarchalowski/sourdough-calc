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

  //* init
  strongWhiteFlourWeight: number = this.breadComponents.getStrongWhiteFlourWeight();
  waterWeight: number = this.breadComponents.getWaterWeight();
  flourType2Weight: number = this.breadComponents.getFlourType2Weight();
  flourType3Weight: number = this.breadComponents.getFlourType3Weight();
  saltWeight: number = this.breadComponents.getSaltWeight();
  inclusion1Weight: number = this.breadComponents.getInclusion1Weight();
  inclusion2Weight: number = this.breadComponents.getInclusion2Weight();
  inclusion3Weight: number = this.breadComponents.getInclusion3Weight();
  totalWeight: number = this.breadComponents.getTotalIngredientsWeight();

  ngOnInit() {
    this.recalculateWeights();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.recalculateWeights();
  }

  public getStrongWhiteFlourWeight() {
    return this.strongWhiteFlourWeight;
  }

  recalculateWeights(): void {

    this.breadComponents.updateMainDoughWeights();

    this.model.strongWhiteFlourBakers = 100 - this.model.flourType2Bakers - this.model.flourType3Bakers;

    // ?! how the fuck can I update that fuckin levain weight?
    this.strongWhiteFlourWeight = parseFloat(this.breadComponents.getStrongWhiteFlourWeight().toFixed(1));
    this.waterWeight = parseFloat(this.breadComponents.getWaterWeight().toFixed(1));
    this.flourType2Weight = parseFloat(this.breadComponents.getFlourType2Weight().toFixed(1));
    this.flourType3Weight = parseFloat(this.breadComponents.getFlourType3Weight().toFixed(1));
    this.saltWeight = parseFloat(this.breadComponents.getSaltWeight().toFixed(1));
    this.inclusion1Weight = parseFloat(this.breadComponents.getInclusion1Weight().toFixed(1));
    this.inclusion2Weight = parseFloat(this.breadComponents.getInclusion2Weight().toFixed(1));
    this.inclusion3Weight = parseFloat(this.breadComponents.getInclusion3Weight().toFixed(1));

    this.totalWeight = Math.round(parseFloat((this.breadComponents.getTotalIngredientsWeight()).toFixed(1)));
  };

}
