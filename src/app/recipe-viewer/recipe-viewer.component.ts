import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrdService } from '../frd.service';
import { RecipeIngredients } from '../recipe-ingredients';
import { RecipeFormula } from '../recipe-formula';
import { MainDough } from '../main-dough';
import { Ferments } from '../ferments';
import { RipeStarter } from '../ripe-starter';
import { Levain } from '../levain';
import { Ingredients } from '../ingredients';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-recipe-viewer',
  templateUrl: './recipe-viewer.component.html',
  styleUrls: ['./recipe-viewer.component.scss']
})
export class RecipeViewerComponent implements OnInit {

  id: string | undefined;
  title = this.translate.get('form.upload.defaultTitle');
  createdDate = Date.now();
  recipe: RecipeIngredients | undefined;
  recipeFormula: RecipeFormula = new RecipeFormula(0,0,0);
  mainDough: MainDough = new MainDough(0,0,0,0,0,0,0,0,0);
  mainDoughWeights: any = {};
  ferments: Ferments = new Ferments(new RipeStarter(0,0), new Levain(0,0,0));
  fermentsWeights: any = {levain: {}, ripeStarter: {}};
  ingredients: Ingredients = new Ingredients(0,0,0,0,0,0,0,0);
  ingredientsWeights: any = {};
  isVisible = false;

  constructor(
    private route: ActivatedRoute,  
    private frdService: FrdService,
    public translate: TranslateService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.isVisible = false;
    this.getRecipe();
  }

  getRecipe(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.frdService.getRecipe(this.id).subscribe(recipeRTDB => {
      this.recipe = recipeRTDB.recipe;
      this.recipeFormula = recipeRTDB.recipe.recipeFormula;
      this.ingredients = recipeRTDB.recipe.ingredients;
      this.ferments = recipeRTDB.recipe.ferments;
      this.fermentsWeights = recipeRTDB.weights.ferments;
      this.ingredientsWeights = recipeRTDB.weights.ingredients;
      this.mainDough = recipeRTDB.recipe.mainDough;
      this.mainDoughWeights = recipeRTDB.weights.mainDough;
      this.title = recipeRTDB.title;
      this.createdDate = recipeRTDB.timestamp;
      console.info(`Loaded recipe (${this.id}):`, this.recipe);
      this.titleService.setTitle(`${this.title} | SourCalc`);
      this.showRecipeContainer();
    }, error => {
      this.hideRecipeContainer();
      this.router.navigate(['**']);
      console.info(error);
    });
  }

  showRecipeContainer(): void {
    this.isVisible = true;
  }
  
  hideRecipeContainer(): void {
    this.isVisible = false;
  }
  

  toggleRecipeContainer(): void {
    this.isVisible != this.isVisible;
  }

}
