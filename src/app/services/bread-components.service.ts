import { Injectable } from '@angular/core';
import { Levain } from '../levain';
import { RipeStarter } from '../ripe-starter';
import { Ferments } from '../ferments';
import { Ingredients } from '../ingredients';
import { RecipeFormula } from '../recipe-formula';
import { MainDough } from '../main-dough';
import { BehaviorSubject } from 'rxjs';
import { UseLocalStorageService } from './use-local-storage.service';
import { RecipeIngredients } from '../recipe-ingredients';

@Injectable({
  providedIn: 'root'
})
export class BreadComponentsService {

  constructor(private localStorage: UseLocalStorageService) { }

  //* object we are changing
  private levain = new Levain(100, 100, 10);
  private levainAsObservable = new BehaviorSubject<Levain>(this.levain); //* make an BehaviorSubject out of it
  castLevain = this.levainAsObservable.asObservable(); //* cast as an Observable

  //* object we are changing
  private ripeStarter = new RipeStarter(100, 100);
  private ripeStarterAsObservable = new BehaviorSubject<RipeStarter>(this.ripeStarter); //* make an BehaviorSubject out of it
  castRipeStarter = this.ripeStarterAsObservable.asObservable(); //* cast as an Observable

  //* object we are changing
  private ferments = new Ferments(this.getRipeStarter(), this.getLevain());
  private fermentsAsObservable = new BehaviorSubject<Ferments>(this.ferments); //* make an BehaviorSubject out of it
  castFerments = this.fermentsAsObservable.asObservable(); //* cast as an Observable

  //* object we are changing
  private recipeFormula = new RecipeFormula(800, 10, 1);
  private recipeFormulaAsObservable = new BehaviorSubject<RecipeFormula>(this.recipeFormula); //* make an BehaviorSubject out of it
  castRecipeFormula = this.recipeFormulaAsObservable.asObservable(); //* cast as an Observable

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
    this.getRecipeFormula().levain,
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
  updateMainDoughStrongWhiteFlourWeight(): void { this.mainDoughWeights.strongWhiteFlourWeight = this.getIngredientsWeights().strongWhiteFlourWeight - this.getFermentsWeights().levain.strongWhiteFlourWeight - this.getFermentsWeights().ripeStarter.flourWeight; }
  updateMainDoughFlourType2Weight(): void { this.mainDoughWeights.flourType2Weight = this.getIngredientsWeights().flourType2Weight; }
  updateMainDoughFlourType3Weight(): void { this.mainDoughWeights.flourType3Weight = this.getIngredientsWeights().flourType3Weight; }
  updateMainDoughWaterWeight(): void { this.mainDoughWeights.waterWeight = this.getIngredientsWeights().waterWeight - this.getFermentsWeights().levain.waterWeight - this.getFermentsWeights().ripeStarter.waterWeight; }
  updateMainDoughSaltWeight(): void { this.mainDoughWeights.saltWeight = this.getIngredientsWeights().saltWeight; }
  updateMainDoughLevainWeight(): void { this.mainDoughWeights.levainWeight = (this.getIngredientsWeights().strongWhiteFlourWeight + this.getIngredientsWeights().flourType2Weight + this.getIngredientsWeights().flourType3Weight) * this.getRecipeFormula().levain / 100; }
  updateMainDoughInclusion1Weight(): void { this.mainDoughWeights.inclusion1Weight = this.getIngredientsWeights().inclusion1Weight; }
  updateMainDoughInclusion2Weight(): void { this.mainDoughWeights.inclusion2Weight = this.getIngredientsWeights().inclusion2Weight; }
  updateMainDoughInclusion3Weight(): void { this.mainDoughWeights.inclusion3Weight = this.getIngredientsWeights().inclusion3Weight; }
  updateMainDoughTotalWeight(): void { this.mainDoughWeights.totalWeight = this.getMainDoughWeights().strongWhiteFlourWeight + this.getMainDoughWeights().flourType2Weight + this.getMainDoughWeights().flourType3Weight + this.getMainDoughWeights().waterWeight + this.getMainDoughWeights().saltWeight + this.getMainDoughWeights().levainWeight + this.getMainDoughWeights().inclusion1Weight + this.getMainDoughWeights().inclusion2Weight + this.getMainDoughWeights().inclusion3Weight; console.warn('mainDoughTotalWeight: ' + this.mainDoughWeights.totalWeight);}
  //? Ingredients
  updateIngredientsStrongWhiteFlourWeight(): void { this.ingredientsWeights.strongWhiteFlourWeight = this.calculateSingleIngredientWeight(this.getIngredients().strongWhiteFlourBakers); }
  updateIngredientsFlourType2Weight(): void { this.ingredientsWeights.flourType2Weight = this.calculateSingleIngredientWeight(this.getIngredients().flourType2Bakers); }
  updateIngredientsFlourType3Weight(): void { this.ingredientsWeights.flourType3Weight = this.calculateSingleIngredientWeight(this.getIngredients().flourType3Bakers); }
  updateIngredientsWaterWeight(): void { this.ingredientsWeights.waterWeight = this.calculateSingleIngredientWeight(this.getIngredients().waterBakers); }
  updateIngredientsSaltWeight(): void { this.ingredientsWeights.saltWeight = this.calculateSingleIngredientWeight(this.getIngredients().saltBakers); }
  updateIngredientsInclusion1Weight(): void { this.ingredientsWeights.inclusion1Weight = this.calculateSingleIngredientWeight(this.getIngredients().inclusion1Bakers); }
  updateIngredientsInclusion2Weight(): void { this.ingredientsWeights.inclusion2Weight = this.calculateSingleIngredientWeight(this.getIngredients().inclusion2Bakers); }
  updateIngredientsInclusion3Weight(): void { this.ingredientsWeights.inclusion3Weight = this.calculateSingleIngredientWeight(this.getIngredients().inclusion3Bakers); }
  updateIngredientsTotalWeight(): void { this.ingredientsWeights.totalWeight = this.getIngredientsWeights().strongWhiteFlourWeight + this.getIngredientsWeights().flourType2Weight + this.getIngredientsWeights().flourType3Weight + this.getIngredientsWeights().waterWeight + this.getIngredientsWeights().saltWeight + this.getIngredientsWeights().inclusion1Weight + this.getIngredientsWeights().inclusion2Weight + this.getIngredientsWeights().inclusion3Weight; }
  //? Ferments
  //?   Ripe Starter
  updateFermentsRipeStarterFlourWeight(): void { this.fermentsWeights.ripeStarter.flourWeight = this.getFermentsWeights().levain.ripeStarterWeight / this.getFermentsRipeStarterBakersTotal() * this.getRipeStarter().flourBakers; }
  updateFermentsRipeStarterWaterWeight(): void { this.fermentsWeights.ripeStarter.waterWeight = this.getFermentsWeights().levain.ripeStarterWeight / this.getFermentsRipeStarterBakersTotal() * this.getRipeStarter().waterBakers; }
  updateFermentsRipeStarterTotalWeight(): void { this.fermentsWeights.ripeStarter.totalWeight = this.getFermentsWeights().ripeStarter.flourWeight + this.getFermentsWeights().ripeStarter.waterWeight; }
  //?   Levain
  updateFermentsLevainStrongWhiteFlourWeight(): void { this.fermentsWeights.levain.strongWhiteFlourWeight = this.getMainDoughWeights().levainWeight / this.getFermentsLevainBakersTotal() * this.getLevain().strongWhiteFlourBakers; }
  updateFermentsLevainWaterWeight(): void { this.fermentsWeights.levain.waterWeight = this.getMainDoughWeights().levainWeight / this.getFermentsLevainBakersTotal() * this.getLevain().waterBakers; }
  updateFermentsLevainRipeStarterWeight(): void { this.fermentsWeights.levain.ripeStarterWeight = this.getMainDoughWeights().levainWeight / this.getFermentsLevainBakersTotal() * this.getLevain().ripeStarterBakers; }
  updateFermentsLevainTotalWeight(): void { this.fermentsWeights.levain.totalWeight = this.getFermentsWeights().levain.strongWhiteFlourWeight + this.getFermentsWeights().levain.waterWeight + this.getFermentsWeights().levain.ripeStarterWeight; }

  private calculateSingleIngredientWeight(ingredientInBakers: number): number {
    return (this.getRecipeFormula().doughWeight / (this.getIngredientsTotalBakers()) * (ingredientInBakers)) * this.getRecipeFormula().scale;
  }

  getIngredientsTotalBakers(): number {
    const totalBakers = this.getIngredients().strongWhiteFlourBakers + this.getIngredients().flourType2Bakers + this.getIngredients().flourType3Bakers + this.getIngredients().waterBakers + this.getIngredients().saltBakers + this.getIngredients().inclusion1Bakers + this.getIngredients().inclusion2Bakers + this.getIngredients().inclusion3Bakers;

    return totalBakers;
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
    this.ingredientsWeightsAsObservable.next(this.ingredientsWeights);
  }

  updateMainDoughWeights(): void {
    this.updateIngredientsWeights(); //* need to update them first!
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
    this.mainDoughWeightsAsObservable.next(this.mainDoughWeights);
  }

  updateFermentsWeights(): void {
    this.updateMainDoughWeights(); //* need to update them first!
    this.updateFermentsLevainStrongWhiteFlourWeight();
    this.updateFermentsLevainWaterWeight();
    this.updateFermentsLevainRipeStarterWeight();
    this.updateFermentsRipeStarterFlourWeight();
    this.updateFermentsRipeStarterWaterWeight();
    this.updateFermentsRipeStarterTotalWeight();
    this.updateFermentsLevainTotalWeight();
    this.fermentsWeightsAsObservable.next(this.fermentsWeights);
  }

  recalculateWeights(): void {
    //* values dependency chain~ updated in reverse order
    this.updateFermentsWeights();
    this.updateMainDoughWeights();
    this.updateIngredientsWeights();
  }

  //* LOCAL STORAGE
  saveToLocalStorage() {
    const recipeIngredients: RecipeIngredients = {
      recipeFormula: this.getRecipeFormula(), 
      ingredients: this.getIngredients(),
      mainDough: this.getMainDough(),
      ferments: this.getFerments()
    };

    this.recalculateWeights(); //? do we need to update it once again before save?
    this.localStorage.save(recipeIngredients, this.mainDoughWeights);
  }

  loadFromLocalStorage() {
    const recipe: RecipeIngredients | null = this.localStorage.load();

    if (recipe == null) {
      console.info('Recipe not found.');
      return;
    }

    this.setRecipeFormula(recipe.recipeFormula);
    this.setIngredients(recipe.ingredients);
    this.setMainDough(recipe.mainDough);
    this.setLevain(recipe.ferments.levain);
    this.setRipeStarter(recipe.ferments.ripeStarter);
    this.setFerments(recipe.ferments);
    this.recalculateWeights();
    console.info('Recipe loaded.');
  }

  // * GETTERS
  getMainDoughWeights(): any {
    return this.mainDoughWeightsAsObservable.getValue();
  }

  getIngredientsWeights(): any {
    return this.ingredientsWeightsAsObservable.getValue();
  }

  getFermentsWeights(): any {
    return this.fermentsWeightsAsObservable.getValue();
  }

  getFermentsLevainBakersTotal(): number {
    return this.levainAsObservable.getValue().ripeStarterBakers + this.levainAsObservable.getValue().strongWhiteFlourBakers + this.levainAsObservable.getValue().waterBakers;
  }

  getFermentsRipeStarterBakersTotal(): number {
    return this.ripeStarterAsObservable.getValue().flourBakers + this.ripeStarterAsObservable.getValue().waterBakers;
  }

  getTotalFermentsLevainWeight(): number {
    return this.fermentsWeightsAsObservable.getValue().levain.totalWeight;
  }

  getTotalFermentsRipeStarterWeight(): number {
    return this.fermentsWeightsAsObservable.getValue().ripeStarter.totalWeight;
  }

  getTotalIngredientsWeight(): number {
    return this.ingredientsWeightsAsObservable.getValue().totalWeight;
  }

  getTotalMainDoughWeight(): number {
    return this.mainDoughWeightsAsObservable.getValue().totalWeight;
  }

  getRecipeFormula(): RecipeFormula {
    return this.recipeFormulaAsObservable.getValue();
  }

  getLevain(): Levain {
    return this.levainAsObservable.getValue();
  }

  getRipeStarter(): RipeStarter {
    return this.ripeStarterAsObservable.getValue();
  }

  getFerments(): Ferments {
    return this.fermentsAsObservable.getValue();
  }

  getIngredients(): Ingredients {
    return this.ingredientsAsObservable.getValue();
  }

  getMainDough(): MainDough {
    return this.mainDoughAsObservable.getValue();
  }

  // * SETTERS
  setRecipeFormula(recipeFormula: RecipeFormula) {
    this.recipeFormulaAsObservable.next(recipeFormula)
  }

  setLevain(levain: Levain) {
    this.levainAsObservable.next(levain);
  }

  setRipeStarter(ripeStarter: RipeStarter) {
    this.ripeStarterAsObservable.next(ripeStarter);
  }

  setFerments(ferments: Ferments) {
    this.fermentsAsObservable.next(ferments);
  }

  setIngredients(ingredients: Ingredients) {
    this.ingredientsAsObservable.next(ingredients);
  }

  setMainDough(mainDough: MainDough) {
    this.mainDoughAsObservable.next(mainDough);
  }

}
