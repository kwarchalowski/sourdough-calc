import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrdService } from '../frd.service';
import { RecipeIngredients } from '../recipe-ingredients';
import { RecipeFormula } from '../recipe-formula';
import { MainDough } from '../main-dough';
import { Ferments } from '../ferments';
import { RipeStarter } from '../ripe-starter';
import { Levain } from '../levain';
import { Ingredients } from '../ingredients';

@Component({
  selector: 'app-recipe-viewer',
  templateUrl: './recipe-viewer.component.html',
  styleUrls: ['./recipe-viewer.component.scss']
})
export class RecipeViewerComponent implements OnInit {

  id: string | undefined;
  title = 'Default title~';
  recipe: RecipeIngredients | undefined;
  recipeFormula: RecipeFormula = new RecipeFormula(0,0,0);
  ingredientsWeights: any = {};
  mainDough: MainDough = new MainDough(0,0,0,0,0,0,0,0,0);
  ferments: Ferments = new Ferments(new RipeStarter(0,0), new Levain(0,0,0));
  ingredients: Ingredients = new Ingredients(0,0,0,0,0,0,0,0);

  constructor(
    private route: ActivatedRoute,  
    private frdService: FrdService,
  ) {}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.frdService.getRecipe(this.id).subscribe(recipeRTDB => {
      this.recipe = recipeRTDB.recipe;
      this.recipeFormula = recipeRTDB.recipe.recipeFormula;
      this.ingredients = recipeRTDB.recipe.ingredients;
      this.ingredientsWeights = recipeRTDB.ingredientsWeights;
      this.title = recipeRTDB.title;
      console.info(`Loaded recipe (${this.id}):`, this.recipe);
    });
  }
}
