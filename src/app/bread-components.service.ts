import { Injectable } from '@angular/core';
import { Levain } from './levain';
import { RipeStarter } from './ripe-starter';
import { Ferments } from './ferments';
import { Ingredients } from './ingredients';
import { RecipeFormula } from './recipe-formula';
import { MainDough } from './main-dough';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadComponentsService {

  constructor() { }

  private recipeFormula = new RecipeFormula(800, 10, 1);
  private levain = new Levain(100, 100, 10);
  private ripeStarter = new RipeStarter(100, 100);
  private ferments = new Ferments(this.ripeStarter, this.levain);

  //* object we are changing
  private ingredients = new Ingredients(100, 70, 2, 0, 0, 0, 0, 0);
  private ingredientsAsObservable = new BehaviorSubject<Ingredients>(this.ingredients); //* make an BehaviorSubject out of it
  castIngredients = this.ingredientsAsObservable.asObservable(); //* cast as an Observable

  //* object we are changing
  private mainDough = new MainDough(
    this.ingredients.strongWhiteFlourBakers,
    this.ingredients.waterBakers,
    this.ingredients.saltBakers,
    this.ingredients.flourType2Bakers,
    this.ingredients.flourType3Bakers,
    this.recipeFormula.levain,
    this.ingredients.inclusion1Bakers,
    this.ingredients.inclusion2Bakers,
    this.ingredients.inclusion3Bakers
  );
  private mainDoughAsObservable = new BehaviorSubject<MainDough>(this.mainDough); //* make an BehaviorSubject out of it
  castMainDough = this.mainDoughAsObservable.asObservable(); //* cast as an Observable

  //* object we are changing
  private ingredientsWeights = {
    strongWhiteFlourWeight: 0,
    flourType2Weight: 0,
    flourType3Weight: 0,
    waterWeight: 0,
    saltWeight: 0,
    inclusion1Weight: 0,
    inclusion2Weight: 0,
    inclusion3Weight: 0,
    totalWeight: 0
  }
  private ingredientsWeightsAsObservable = new BehaviorSubject<any>(this.ingredientsWeights); //* make an BehaviorSubject out of it
  castIngredientsWeights = this.ingredientsWeightsAsObservable.asObservable(); //* cast as an Observable

  //* object we are changing
  private mainDoughWeights = {
    strongWhiteFlourWeight: 0,
    flourType2Weight: 0,
    flourType3Weight: 0,
    waterWeight: 0,
    saltWeight: 0,
    levainWeight: 0,
    inclusion1Weight: 0,
    inclusion2Weight: 0,
    inclusion3Weight: 0,
    totalWeight: 0
  }
  private mainDoughWeightsAsObservable = new BehaviorSubject<any>(this.mainDoughWeights); //* make an BehaviorSubject out of it
  castMainDoughWeights = this.mainDoughWeightsAsObservable.asObservable(); //* cast as an Observable

  //* object we are changing
  private fermentsWeights = {
    ripeStarter: {
      flourWeight: 0,
      waterWeight: 0,
      totalWeight: 0
    },
    levain: {
      strongWhiteFlourWeight: 0,
      waterWeight: 0,
      ripeStarterWeight: 0,
      totalWeight: 0
    }
  }
  private fermentsWeightsAsObservable = new BehaviorSubject<any>(this.fermentsWeights); //* make an BehaviorSubject out of it
  castFermentsWeights = this.fermentsWeightsAsObservable.asObservable(); //* cast as an Observable

  // * UPDATES
  //? MainDough
  // TODO: remember to fill them
  updateMainDoughStrongWhiteFlourWeight(): void { this.mainDoughWeights.strongWhiteFlourWeight = this.ingredientsWeights.strongWhiteFlourWeight - this.fermentsWeights.levain.strongWhiteFlourWeight - this.fermentsWeights.ripeStarter.flourWeight; }
  updateMainDoughFlourType2Weight(): void { this.mainDoughWeights.flourType2Weight = this.ingredientsWeights.flourType2Weight; }
  updateMainDoughFlourType3Weight(): void { this.mainDoughWeights.flourType3Weight = this.ingredientsWeights.flourType3Weight; }
  updateMainDoughWaterWeight(): void { this.mainDoughWeights.waterWeight = this.ingredientsWeights.waterWeight - this.fermentsWeights.levain.waterWeight - this.fermentsWeights.ripeStarter.waterWeight; }
  updateMainDoughSaltWeight(): void { this.mainDoughWeights.saltWeight = this.ingredientsWeights.saltWeight; }
  updateMainDoughLevainWeight(): void { this.mainDoughWeights.levainWeight = (this.getIngredientsWeights().strongWhiteFlourWeight + this.getIngredientsWeights().flourType2Weight + this.getIngredientsWeights().flourType3Weight) * this.getRecipeFormula().levain / 100; }
  updateMainDoughInclusion1Weight(): void { this.mainDoughWeights.inclusion1Weight = this.ingredientsWeights.inclusion1Weight; }
  updateMainDoughInclusion2Weight(): void { this.mainDoughWeights.inclusion2Weight = this.ingredientsWeights.inclusion2Weight; }
  updateMainDoughInclusion3Weight(): void { this.mainDoughWeights.inclusion3Weight = this.ingredientsWeights.inclusion3Weight; }
  updateMainDoughTotalWeight(): void { this.mainDoughWeights.totalWeight = this.mainDoughWeights.strongWhiteFlourWeight + this.mainDoughWeights.flourType2Weight + this.mainDoughWeights.flourType3Weight + this.mainDoughWeights.waterWeight + this.mainDoughWeights.saltWeight + this.mainDoughWeights.levainWeight + this.mainDoughWeights.inclusion1Weight + this.mainDoughWeights.inclusion2Weight + this.mainDoughWeights.inclusion3Weight; }
  //? Ingredients
  updateIngredientsStrongWhiteFlourWeight(): void { this.ingredientsWeights.strongWhiteFlourWeight = this.calculateSingleIngredientWeight(this.ingredients.strongWhiteFlourBakers); }
  updateIngredientsFlourType2Weight(): void { this.ingredientsWeights.flourType2Weight = this.calculateSingleIngredientWeight(this.ingredients.flourType2Bakers); }
  updateIngredientsFlourType3Weight(): void { this.ingredientsWeights.flourType3Weight = this.calculateSingleIngredientWeight(this.ingredients.flourType3Bakers); }
  updateIngredientsWaterWeight(): void { this.ingredientsWeights.waterWeight = this.calculateSingleIngredientWeight(this.ingredients.waterBakers); }
  updateIngredientsSaltWeight(): void { this.ingredientsWeights.saltWeight = this.calculateSingleIngredientWeight(this.ingredients.saltBakers); }
  updateIngredientsInclusion1Weight(): void { this.ingredientsWeights.inclusion1Weight = this.calculateSingleIngredientWeight(this.ingredients.inclusion1Bakers); }
  updateIngredientsInclusion2Weight(): void { this.ingredientsWeights.inclusion2Weight = this.calculateSingleIngredientWeight(this.ingredients.inclusion2Bakers); }
  updateIngredientsInclusion3Weight(): void { this.ingredientsWeights.inclusion3Weight = this.calculateSingleIngredientWeight(this.ingredients.inclusion3Bakers); }
  updateIngredientsTotalWeight(): void { this.ingredientsWeights.totalWeight = this.ingredientsWeights.strongWhiteFlourWeight + this.ingredientsWeights.flourType2Weight + this.ingredientsWeights.flourType3Weight + this.ingredientsWeights.waterWeight + this.ingredientsWeights.saltWeight + this.ingredientsWeights.inclusion1Weight + this.ingredientsWeights.inclusion2Weight + this.ingredientsWeights.inclusion3Weight; }
  //? Ferments
  //?   Ripe Starter
  updateFermentsRipeStarterFlourWeight(): void { this.fermentsWeights.ripeStarter.flourWeight = this.fermentsWeights.levain.ripeStarterWeight / this.getFermentsRipeStarterBakersTotal() * this.ripeStarter.flourBakers; }
  updateFermentsRipeStarterWaterWeight(): void { this.fermentsWeights.ripeStarter.waterWeight = this.fermentsWeights.levain.ripeStarterWeight / this.getFermentsRipeStarterBakersTotal() * this.ripeStarter.waterBakers; }
  updateFermentsRipeStarterTotalWeight(): void { this.fermentsWeights.ripeStarter.totalWeight = this.fermentsWeights.ripeStarter.flourWeight + this.fermentsWeights.ripeStarter.waterWeight; }
  //?   Levain
  updateFermentsLevainStrongWhiteFlourWeight(): void { this.fermentsWeights.levain.strongWhiteFlourWeight = this.mainDoughWeights.levainWeight / this.getFermentsLevainBakersTotal() * this.levain.strongWhiteFlourBakers; }
  updateFermentsLevainWaterWeight(): void { this.fermentsWeights.levain.waterWeight = this.mainDoughWeights.levainWeight / this.getFermentsLevainBakersTotal() * this.levain.waterBakers; }
  updateFermentsLevainRipeStarterWeight(): void { this.fermentsWeights.levain.ripeStarterWeight = this.mainDoughWeights.levainWeight / this.getFermentsLevainBakersTotal() * this.levain.ripeStarterBakers; }
  updateFermentsLevainTotalWeight(): void { this.fermentsWeights.levain.totalWeight = this.fermentsWeights.levain.strongWhiteFlourWeight + this.fermentsWeights.levain.waterWeight + this.fermentsWeights.levain.ripeStarterWeight; }
  
  private calculateSingleIngredientWeight(ingredientInBakers: number): number {
    return (this.recipeFormula.doughWeight / (this.ingredients.totalBakers()) * (ingredientInBakers)) * this.recipeFormula.scale;
  }

  updateIngredientsWeights(): void {
    this.updateIngredientsStrongWhiteFlourWeight();
    this.updateIngredientsFlourType2Weight();
    this.updateIngredientsFlourType3Weight();
    this.updateIngredientsWaterWeight();
    this.updateIngredientsSaltWeight();
    this.updateIngredientsInclusion1Weight();
    this.updateIngredientsInclusion2Weight();
    this.updateIngredientsInclusion3Weight();
    this.updateIngredientsTotalWeight();
    this.ingredientsWeightsAsObservable.next(this.getIngredientsWeights());
  }

  updateMainDoughWeights(): void {
    this.updateIngredientsWeights(); //* need to update them first! :)
    this.updateMainDoughLevainWeight();
    this.updateMainDoughStrongWhiteFlourWeight();
    this.updateMainDoughFlourType2Weight();
    this.updateMainDoughFlourType3Weight();
    this.updateMainDoughWaterWeight();
    this.updateMainDoughSaltWeight();
    this.updateMainDoughInclusion1Weight();
    this.updateMainDoughInclusion2Weight();
    this.updateMainDoughInclusion3Weight();
    this.updateMainDoughTotalWeight();
    this.mainDoughWeightsAsObservable.next(this.getMainDoughWeights());
  }

  updateFermentsWeights(): void {
    this.updateMainDoughWeights(); //* need to update them first! :)
    this.updateFermentsLevainStrongWhiteFlourWeight();
    this.updateFermentsLevainWaterWeight();
    this.updateFermentsLevainRipeStarterWeight();
    this.updateFermentsRipeStarterFlourWeight();
    this.updateFermentsRipeStarterWaterWeight();
    this.updateFermentsRipeStarterTotalWeight();
    this.updateFermentsLevainTotalWeight();
    this.fermentsWeightsAsObservable.next(this.getFermentsWeights());
  }

  // * GETTERS
  getMainDoughWeights(): any {
    return this.mainDoughWeights;
  }

  getIngredientsWeights(): any {
    return this.ingredientsWeights;
  }

  getFermentsWeights(): any {
    return this.fermentsWeights;
  }

  getFermentsLevainBakersTotal(): number {
    return this.levain.ripeStarterBakers + this.levain.strongWhiteFlourBakers + this.levain.waterBakers;
  }

  getFermentsRipeStarterBakersTotal(): number {
    return this.ripeStarter.flourBakers + this.ripeStarter.waterBakers;
  }

  getTotalFermentsLevainWeight(): number {
    return this.fermentsWeights.levain.totalWeight;
  }

  getTotalFermentsRipeStarterWeight(): number {
    return this.fermentsWeights.ripeStarter.totalWeight;
  }

  getTotalIngredientsWeight(): number {
    return this.ingredientsWeights.totalWeight;
  }

  getTotalMainDoughWeight(): number {
    return this.mainDoughWeights.totalWeight;
  }

  getRecipeFormula(): RecipeFormula {
    return this.recipeFormula;
  }

  getLevain(): Levain {
    return this.levain;
  }

  getRipeStarter(): RipeStarter {
    return this.ripeStarter;
  }

  getFerments(): Ferments {
    return this.ferments;
  }

  getIngredients(): Ingredients {
    return this.ingredients;
  }

  getMainDough(): MainDough {
    return this.mainDough;
  }

  // * SETTERS
  setRecipeFormula(recipeFormula: RecipeFormula) {
    this.recipeFormula = recipeFormula;
  }

  setLevain(levain: Levain) {
    this.levain = levain;
  }

  setRipeStarter(ripeStarter: RipeStarter) {
    this.ripeStarter = ripeStarter;
  }

  setFerments(ferments: Ferments) {
    this.ferments = ferments;
  }

  setIngredients(ingredients: Ingredients) {
    this.ingredientsAsObservable.next(ingredients);
  }

  setMainDough(mainDough: MainDough) {
    this.mainDoughAsObservable.next(mainDough);
  }

}
