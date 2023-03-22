import { Injectable } from '@angular/core';
import { BreadComponentsService } from './bread-components.service';
import { RecipeIngredients } from '../recipe-ingredients';

@Injectable({
  providedIn: 'root'
})
export class UseLocalStorageService {

  constructor() { }

  save(recipeIngredients: RecipeIngredients) {

    const recipe = JSON.stringify(recipeIngredients);
    localStorage.setItem('recipe-ingredients', recipe);
  }

  load(): RecipeIngredients | null {

    const recipe: string | null = localStorage.getItem('recipe-ingredients');

    if (recipe === null) return null;

    return JSON.parse(recipe);
  }




}
