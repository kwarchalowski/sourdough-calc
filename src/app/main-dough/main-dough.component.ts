import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BreadComponentsService } from '../bread-components.service';

@Component({
  selector: 'app-main-dough',
  templateUrl: './main-dough.component.html',
  styleUrls: ['./main-dough.component.scss']
})
export class MainDoughComponent {

  @Input() doughWeight = 0;
  @Input() levain = 0;
  @Input() scale = 0;

  constructor(private breadComponents: BreadComponentsService) { }

  model = this.breadComponents.getMainDough();

  //* init
  strongWhiteFlourWeight: number = 0;
  flourType2Weight: number = 0;
  flourType3Weight: number = 0;
  waterWeight: number = 0;
  saltWeight: number = 0;
  levainWeight: number = this.breadComponents.getLevainWeight();
  inclusion1Weight: number = 0;
  inclusion2Weight: number = 0;
  inclusion3Weight: number = 0;

  

}
