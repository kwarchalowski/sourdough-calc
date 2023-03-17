import { Component } from '@angular/core';
import { BreadComponentsService } from '../bread-components.service';

@Component({
  selector: 'app-main-dough',
  templateUrl: './main-dough.component.html',
  styleUrls: ['./main-dough.component.scss']
})
export class MainDoughComponent {

  constructor(private breadComponents: BreadComponentsService) { }

  mainDoughWeights = this.breadComponents.getMainDoughWeights();
  model = this.breadComponents.getMainDough();

  ngOnInit() {
    this.breadComponents.castMainDoughWeights.subscribe(mainDoughWeights => this.mainDoughWeights = mainDoughWeights);
    this.breadComponents.castMainDough.subscribe(mainDough => this.model = mainDough);
  }

}
