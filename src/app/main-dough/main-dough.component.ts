import { Component } from '@angular/core';
import { BreadComponentsService } from '../services/bread-components.service';

@Component({
  selector: 'app-main-dough',
  templateUrl: './main-dough.component.html',
  styleUrls: ['./main-dough.component.scss']
})
export class MainDoughComponent {

  constructor(private breadComponents: BreadComponentsService) { }

  model = this.breadComponents.getMainDough();
  // recipeNotes = '';
  mainDoughWeights = this.breadComponents.getMainDoughWeights();

  ngOnInit() {
    this.breadComponents.castMainDoughWeights.subscribe(mainDoughWeights => this.mainDoughWeights = mainDoughWeights);
    this.breadComponents.castMainDough.subscribe(mainDough => this.model = mainDough);
  }

}
