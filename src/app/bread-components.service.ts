import { Injectable } from '@angular/core';
import { Levain } from './levain';
import { RipeStarter } from './ripe-starter';
import { Ferments } from './ferments';
import { Ingredients } from './ingredients';
import { RecipeFormula } from './recipe-formula';
import { MainDough } from './main-dough';
import { TotalIngredientsComponent } from './total-ingredients/total-ingredients.component';

@Injectable({
  providedIn: 'root'
})
export class BreadComponentsService {

  private recipeFormula = new RecipeFormula(800, 10, 1);
  private levain = new Levain(100, 100, 10);
  private ripeStarter = new RipeStarter(100, 100);
  private ferments = new Ferments(this.ripeStarter, this.levain);
  private ingredients = new Ingredients(100, 70, 2, 0, 0, 0, 0, 0);
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

  private breadComponents = {
    recipeFormula: this.recipeFormula,
    levain: this.levain,
    ripeStarter: this.ripeStarter,
    ferments: this.ferments,
    ingredients: this.ingredients,
    mainDough: this.mainDough
  }

  private ingredientsWeights = {
    strongWhiteFlourWeight: this.calculateSingleIngredientWeight(this.ingredients.strongWhiteFlourBakers),
    flourType2Weight: this.calculateSingleIngredientWeight(this.ingredients.flourType2Bakers),
    flourType3Weight: this.calculateSingleIngredientWeight(this.ingredients.flourType3Bakers),
    waterWeight: this.calculateSingleIngredientWeight(this.ingredients.waterBakers),
    saltWeight: this.calculateSingleIngredientWeight(this.ingredients.saltBakers),
    inclusion1Weight: this.calculateSingleIngredientWeight(this.ingredients.inclusion1Bakers),
    inclusion2Weight: this.calculateSingleIngredientWeight(this.ingredients.inclusion2Bakers),
    inclusion3Weight: this.calculateSingleIngredientWeight(this.ingredients.inclusion3Bakers)    
  }

  private totalIngredientsWeight = 0;

  //private totalIngredientsWeight = Math.round(this.ingredientsWeights.map((acc, ingredient) => acc + ingredient.weight, 0));

  private levainWeight = (this.getStrongWhiteFlourWeight() + this.getFlourType2Weight() + this.getFlourType3Weight()) * this.breadComponents.recipeFormula.levain/100;
  
  constructor() { }

  // *** METHODS
  calculateSingleIngredientWeight(ingredientInBakers: number) {
    return parseFloat(((this.recipeFormula.doughWeight / (this.ingredients.totalBakers()) * (ingredientInBakers)) * this.recipeFormula.scale).toFixed(1));
  }

  private calculateTotalIngredientsWeight() {
    this.totalIngredientsWeight = this.getStrongWhiteFlourWeight() + this.getFlourType2Weight() + this.getFlourType3Weight() + this.getWaterWeight() + this.getSaltWeight() + this.getInclusion1Weight() + this.getInclusion2Weight() + this.getInclusion3Weight();
    return this.totalIngredientsWeight;
  }

  // * GETTERS
  getTotalIngredientsWeight(): number {
    return this.calculateTotalIngredientsWeight();
  }

  getLevainWeight(): number {
    this.levainWeight = (this.getStrongWhiteFlourWeight() + this.getFlourType2Weight() + this.getFlourType3Weight()) * this.breadComponents.recipeFormula.levain/100;
    return this.levainWeight;
  }

  getStrongWhiteFlourWeight(): number {
    this.ingredientsWeights.strongWhiteFlourWeight = this.calculateSingleIngredientWeight(this.ingredients.strongWhiteFlourBakers);
    return this.ingredientsWeights.strongWhiteFlourWeight;
  }

  getFlourType2Weight(): number {
    this.ingredientsWeights.flourType2Weight = this.calculateSingleIngredientWeight(this.ingredients.flourType2Bakers);
    return this.ingredientsWeights.flourType2Weight;
  }

  getFlourType3Weight(): number {
    this.ingredientsWeights.flourType3Weight = this.calculateSingleIngredientWeight(this.ingredients.flourType3Bakers);
    return this.ingredientsWeights.flourType3Weight;
  }

  getWaterWeight(): number {
    this.ingredientsWeights.waterWeight = this.calculateSingleIngredientWeight(this.ingredients.waterBakers);
    return this.ingredientsWeights.waterWeight;
  }

  getSaltWeight(): number {
    this.ingredientsWeights.saltWeight = this.calculateSingleIngredientWeight(this.ingredients.saltBakers);
    return this.ingredientsWeights.saltWeight;
  }

  getInclusion1Weight(): number {
    this.ingredientsWeights.inclusion1Weight = this.calculateSingleIngredientWeight(this.ingredients.inclusion1Bakers);
    return this.ingredientsWeights.inclusion1Weight;
  }

  getInclusion2Weight(): number {
    this.ingredientsWeights.inclusion2Weight = this.calculateSingleIngredientWeight(this.ingredients.inclusion2Bakers);
    return this.ingredientsWeights.inclusion2Weight;
  }

  getInclusion3Weight(): number {
    this.ingredientsWeights.inclusion3Weight = this.calculateSingleIngredientWeight(this.ingredients.inclusion3Bakers);
    return this.ingredientsWeights.inclusion3Weight;
  }

  getRecipeFormula() {
    return this.recipeFormula;
  }

  getLevain() {
    return this.levain;
  }

  getRipeStarter() {
    return this.ripeStarter;
  }

  getFerments() {
    return this.ferments;
  }

  getIngredients() {
    return this.ingredients;
  }

  getMainDough() {
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
    this.ingredients = ingredients;
  }

  setMainDough(mainDough: MainDough) {
    this.mainDough = mainDough;
  }

}
