import { Injectable } from '@angular/core';
import { BreadComponentsService } from './bread-components.service';
import { RecipeIngredients } from '../recipe-ingredients';

@Injectable({
  providedIn: 'root'
})
export class UseLocalStorageService {

  constructor() { }

  save(recipeIngredients: RecipeIngredients, mainDoughWeights: any) {

    const recipe = JSON.stringify(recipeIngredients);
    localStorage.setItem('recipe-ingredients', recipe);
    localStorage.setItem('recipe-weights', JSON.stringify(mainDoughWeights))
  }

  load(): RecipeIngredients | null {

    const recipe: string | null = localStorage.getItem('recipe-ingredients');
    // const mdWeights: string | null = localStorage.getItem('recipe-weights');
    

    if (recipe === null) return null;

    return JSON.parse(recipe);
  }

}
