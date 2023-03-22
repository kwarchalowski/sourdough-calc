import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BreadComponentsService } from '../services/bread-components.service';
import { RipeStarter } from '../ripe-starter';
import { Ferments } from '../ferments';
import { Levain } from '../levain';

@Component({
  selector: 'app-ferments',
  templateUrl: './ferments.component.html',
  styleUrls: ['./ferments.component.scss']
})
export class FermentsComponent implements OnInit {

  @Input() doughWeight = 0;
  @Input() levain = 0;
  @Input() scale = 0;

  constructor(private breadComponents: BreadComponentsService) { }

  model = this.breadComponents.getFerments();
  fermentsWeights = this.breadComponents.getFermentsWeights();

  
  ngOnInit() {
    this.breadComponents.castFerments.subscribe(ferments => this.model = ferments);
    this.breadComponents.castFermentsWeights.subscribe(fermentsWeights => this.fermentsWeights = fermentsWeights);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.recalculateWeights();
  }
  
  recalculateWeights(): void {
    this.breadComponents.updateAllWeights();
  }

}
