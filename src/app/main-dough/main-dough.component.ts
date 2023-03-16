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

  mainDoughWeights = this.breadComponents.getMainDoughWeights();
  model = this.breadComponents.getMainDough();

  ngOnInit() {
    this.breadComponents.castMainDoughWeights.subscribe(mainDoughWeights => this.mainDoughWeights = mainDoughWeights);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.breadComponents.updateMainDoughWeights();
    this.breadComponents.updateFermentsWeights();
  }

}
