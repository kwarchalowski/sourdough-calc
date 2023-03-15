import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BreadComponentsService } from '../bread-components.service';

@Component({
  selector: 'app-ferments',
  templateUrl: './ferments.component.html',
  styleUrls: ['./ferments.component.scss']
})
export class FermentsComponent {

  @Input() doughWeight = 0;
  @Input() levain = 0;
  @Input() scale = 0;

  constructor(private breadComponents: BreadComponentsService) { }

  model = this.breadComponents.getFerments();

  //* init
  starterFlourWeight: number = 0;
  starterWaterWeight: number = 0;
  levainFlourWeight: number = 0;
  levainWaterWeight: number = 0;
  levainRipeStarterWeight: number = 0;

  levainWeight: number = this.breadComponents.getLevainWeight();


  ngOnInit() {
    this.recalculateWeights();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.recalculateWeights();
  }


  recalculateWeights(): void {
    this.levainWeight = this.breadComponents.getLevainWeight();
  };


}
