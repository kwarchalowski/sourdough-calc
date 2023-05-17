import { Injectable } from '@angular/core';
import { RecipeIngredients } from '../recipe-ingredients';

@Injectable({
  providedIn: 'root'
})
export class UseLocalStorageService {

  save(recipeIngredients: RecipeIngredients, mainDoughWeights: any) {

    const recipe = JSON.stringify(recipeIngredients);
    localStorage.setItem('recipe-ingredients', recipe);
    localStorage.setItem('recipe-weights', JSON.stringify(mainDoughWeights))
  }

  load(): RecipeIngredients | null {

    const recipe: string | null = localStorage.getItem('recipe-ingredients');

    if (recipe === null) return null;

    return JSON.parse(recipe);
  }

}
