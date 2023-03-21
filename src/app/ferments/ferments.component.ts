import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BreadComponentsService } from '../services/bread-components.service';

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

  
  ngOnInit() {
    this.breadComponents.castFermentsWeights.subscribe(fermentsWeights => this.fermentsWeights = fermentsWeights);
    this.recalculateWeights();
    this.breadComponents.updateFermentsWeights();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.recalculateWeights();
  }
  
  
  
  recalculateWeights(): void {
    this.breadComponents.updateFermentsWeights();
  }

}
