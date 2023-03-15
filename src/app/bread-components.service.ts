import { Injectable } from '@angular/core';
import { Levain } from './levain';
import { RipeStarter } from './ripe-starter';
import { Ferments } from './ferments';
import { Ingredients } from './ingredients';
import { RecipeFormula } from './recipe-formula';

@Injectable({
  providedIn: 'root'
})
export class BreadComponentsService {

  private recipeFormula = new RecipeFormula(800, 10, 1);
  private levain = new Levain(100, 100, 10);
  private ripeStarter = new RipeStarter(100, 100);
  private ferments = new Ferments(this.ripeStarter, this.levain);
  private ingredients = new Ingredients(100, 70, 2, 0, 0, 0, 0, 0);

  

  constructor() { }

  // * GETTERS
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

}
