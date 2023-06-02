import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrdService } from '../frd.service';
import { RecipeIngredients } from '../recipe-ingredients';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-viewer',
  templateUrl: './recipe-viewer.component.html',
  styleUrls: ['./recipe-viewer.component.scss']
})
export class RecipeViewerComponent implements OnInit {

  id: string | undefined;
  recipe: RecipeIngredients | undefined;

  constructor(
    private route: ActivatedRoute,  
    private frdService: FrdService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRecipe();
    // this.getRecipeFromRTDB();
  }

  // getRecipeFromRTDB(): RecipeIngredients {
  //   this.id = String(this.route.snapshot.paramMap.get('id'));
  //   return this.frdService.getRecipe(this.id)!;
  // }

  
  getRecipe(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.frdService.getRecipe(this.id)?.subscribe(recipe => this.recipe = recipe);
    // console.log(JSON.stringify(this.recipe));
  }

}
