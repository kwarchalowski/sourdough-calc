import { Component, HostListener } from '@angular/core';
import { FrdService } from '../frd.service';

@Component({
  selector: 'app-upload-recipe',
  templateUrl: './upload-recipe.component.html',
  styleUrls: ['./upload-recipe.component.scss']
})
export class UploadRecipeComponent {

  screenWidth = 0;
  isHidden = true;
  showUrl = false;

  titlePlaceholder = 'Title your recipe :)';
  recipeTitle = '';

  constructor (private frdService: FrdService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 500) {
      this.closeOverlay();
    }
  }

  addRecipeToDb() {
    if(this.recipeTitle === '') this.recipeTitle = "My bread recipe";

    this.frdService.addRecipeToDatabase(this.recipeTitle);
    this.recipeTitle = '';
    this.closeOverlay();
  }

  uploadRecipe(): void {
    this.isHidden = false;
    // console.log('Uploading recipe to database...');
  }


  closeOverlay(): void {
    this.isHidden = true;
  }

}
