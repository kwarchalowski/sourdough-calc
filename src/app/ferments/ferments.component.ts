import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ferments } from '../ferments';
import { RipeStarter } from '../ripe-starter';
import { Levain } from '../levain';

@Component({
  selector: 'app-ferments',
  templateUrl: './ferments.component.html',
  styleUrls: ['./ferments.component.scss']
})
export class FermentsComponent {

  @Input() doughWeight = 0;
  @Input() scale = 0;

  ripeStarter = new RipeStarter(100, 100);
  levain = new Levain(100, 100, 10);

  model = new Ferments(this.ripeStarter, this.levain);

    //* init
    starterFlourWeight: number = 0;
    starterWaterWeight: number = 0;
    levainFlourWeight: number = 0;
    levainWaterWeight: number = 0;
    levainRipeStarterWeight: number = 0;
  
  
    ngOnInit() {
      this.recalculateWeights();
    }
  
    ngOnChanges(changes: SimpleChanges) {
      this.recalculateWeights();
    }
  
  
    recalculateWeights(): void {

    };


}
