import { Component } from '@angular/core';
import { FrdService } from '../frd.service';

@Component({
  selector: 'app-upload-recipe',
  templateUrl: './upload-recipe.component.html',
  styleUrls: ['./upload-recipe.component.scss']
})
export class UploadRecipeComponent {

  isHidden = true;
  showUrl = false;

  titlePlaceholder = 'Sourdough bread recipe';
  recipeTitle = '';

  constructor (private frdService: FrdService) { }

  addRecipeToDb() {
    if(this.recipeTitle === '') this.recipeTitle = this.titlePlaceholder;
    
    this.frdService.addRecipeToDatabase(this.recipeTitle);
  }

  uploadRecipe(): void {
    this.isHidden = false;
    console.log('Uploading recipe to database...');
  }


  closeOverlay(): void {
    this.isHidden = true;
  }

}
