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
  fermentsWeights = this.breadComponents.getFermentsWeights();
  //totalLevainWeight: number = this.breadComponents.getTotalFermentsLevainWeight();
  //totalRipeStarterWeight: number = this.breadComponents.getTotalFermentsRipeStarterWeight();

  
  ngOnInit() {
    this.breadComponents.castFermentsWeights.subscribe(fermentsWeights => this.fermentsWeights = fermentsWeights);
    this.recalculateWeights();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.recalculateWeights();
  }
  
  
  
  recalculateWeights(): void {
    // this.breadComponents.updateIngredientsWeights();
    // this.breadComponents.updateMainDoughWeights();
    this.breadComponents.updateFermentsWeights();
    
    //this.totalLevainWeight = this.breadComponents.getTotalFermentsLevainWeight();
    //this.totalRipeStarterWeight = this.breadComponents.getTotalFermentsRipeStarterWeight();
  };

}
