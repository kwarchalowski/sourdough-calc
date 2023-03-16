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
  levainWeight: number = 0;
  //levainWeight: number = this.breadComponents.getLevainWeight();
  inclusion1Weight: number = 0;
  inclusion2Weight: number = 0;
  inclusion3Weight: number = 0;

  private mainDoughWeights = {
    strongWhiteFlourWeight: 0,
    flourType2Weight: 0,
    flourType3Weight: 0,
    waterWeight: 0,
    saltWeight: 0,
    levainWeight: 0,
    inclusion1Weight: 0,
    inclusion2Weight: 0,
    inclusion3Weight: 0   
  }

  ngOnInit() {
    this.breadComponents.castMainDoughWeights.subscribe(mainDoughWeights => this.mainDoughWeights = mainDoughWeights);
  }

  getMainDoughWeights(): any {
    return this.mainDoughWeights;
  }

}
