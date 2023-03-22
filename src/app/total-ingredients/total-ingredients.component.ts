import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BreadComponentsService } from '../services/bread-components.service';
import { Ingredients } from '../ingredients';
import { MainDough } from '../main-dough';
import { UseLocalStorageService } from '../services/use-local-storage.service';

@Component({
  selector: 'app-total-ingredients',
  templateUrl: './total-ingredients.component.html',
  styleUrls: ['./total-ingredients.component.scss']
})
export class TotalIngredientsComponent implements OnChanges {

  @Input() doughWeight = 0;
  @Input() levain = 0;
  @Input() scale = 0;

  constructor(private breadComponents: BreadComponentsService) { }

  model: Ingredients = this.breadComponents.getIngredients();
  ingredientsWeights: any = this.breadComponents.getIngredientsWeights();
  totalWeight: number = this.breadComponents.getTotalIngredientsWeight();

  /*
  // ??????
  private mainDough = new MainDough(
    this.model.strongWhiteFlourBakers,
    this.model.waterBakers,
    this.model.saltBakers,
    this.model.flourType2Bakers,
    this.model.flourType3Bakers,
    this.breadComponents.getRecipeFormula().levain,
    this.model.inclusion1Bakers,
    this.model.inclusion2Bakers,
    this.model.inclusion3Bakers
  );
*/

  ngOnInit(): void {
    this.breadComponents.castIngredientsWeights.subscribe(ingredientsWeights => this.ingredientsWeights = ingredientsWeights);
    this.breadComponents.castIngredients.subscribe(ingredients => this.model = ingredients);
    this.recalculateWeights();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.recalculateWeights();
  }

  recalculateWeights(): void {
    // this.breadComponents.updateIngredientsWeights();
    // this.breadComponents.updateFermentsWeights();
    // this.breadComponents.updateMainDoughWeights();
    this.updateMainDough();
    this.breadComponents.updateAllWeights();
    
    this.model.strongWhiteFlourBakers = 100 - this.model.flourType2Bakers - this.model.flourType3Bakers;
    
    this.totalWeight = this.breadComponents.getTotalIngredientsWeight();
    // console.log('weight: ' + this.totalWeight);
  }

  updateMainDough(): void {

    const mainDough = new MainDough(
      this.model.strongWhiteFlourBakers,
      this.model.waterBakers,
      this.model.saltBakers,
      this.model.flourType2Bakers,
      this.model.flourType3Bakers,
      this.breadComponents.getRecipeFormula().levain,
      this.model.inclusion1Bakers,
      this.model.inclusion2Bakers,
      this.model.inclusion3Bakers
    );


    // console.log('updateMainDough() before set:\n' + JSON.stringify(mainDough));
    this.breadComponents.setMainDough(mainDough);
    // console.log('updateMainDough() after set:\n' + JSON.stringify(mainDough));

    // this.breadComponents.setMainDough(new MainDough(
    //   this.model.strongWhiteFlourBakers,
    //   this.model.waterBakers,
    //   this.model.saltBakers,
    //   this.model.flourType2Bakers,
    //   this.model.flourType3Bakers,
    //   this.breadComponents.getRecipeFormula().levain,
    //   this.model.inclusion1Bakers,
    //   this.model.inclusion2Bakers,
    //   this.model.inclusion3Bakers
    // ));

    // console.log('updateMainDough(), get from breadComponents:\n' + JSON.stringify(this.breadComponents.getMainDough()));
    

  }

  /*
  updateMainDough(): void {
    this.breadComponents.setMainDough(new MainDough(
      this.breadComponents.getIngredients().strongWhiteFlourBakers,
      this.breadComponents.getIngredients().waterBakers,
      this.breadComponents.getIngredients().saltBakers,
      this.breadComponents.getIngredients().flourType2Bakers,
      this.breadComponents.getIngredients().flourType3Bakers,
      this.breadComponents.getRecipeFormula().levain,
      this.breadComponents.getIngredients().inclusion1Bakers,
      this.breadComponents.getIngredients().inclusion2Bakers,
      this.breadComponents.getIngredients().inclusion3Bakers
    ));
  }
  */
}
