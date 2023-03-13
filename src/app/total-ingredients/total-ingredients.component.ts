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

  totalBakers = this.model.totalBakers();

  strongWhiteFlourWeight = 0;

  ngOnChanges(changes: SimpleChanges) {
    this.strongWhiteFlourWeight = (this.doughWeight / (this.totalBakers * this.model.strongWhiteFlourBakers)) * this.scale * 10000;
  }
}
