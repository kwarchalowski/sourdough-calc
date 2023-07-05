import { Component, ElementRef, HostListener } from '@angular/core';
import { FrdService } from '../frd.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-upload-recipe',
  templateUrl: './upload-recipe.component.html',
  styleUrls: ['./upload-recipe.component.scss']
})
export class UploadRecipeComponent {

  warningsCount = document.getElementsByClassName('validation-warning').length;

  screenWidth = 0;
  isHidden = true;
  showInvalidFormOverlay = false;
  showUrl = false;
  errors = 0;
  btnActive = false;

  titlePlaceholder = "'form.upload.titlePlaceholderLabel' | translate";
  recipeTitle = '';

  constructor (private frdService: FrdService, private elementRef: ElementRef, private recaptchaV3Service: ReCaptchaV3Service) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 500) {
      this.closeOverlay();
    }
  }

  addRecipeToDb() {
    if(this.recipeTitle === '') this.recipeTitle = "'form.upload.defaultTitle' | translate";

    this.frdService.addRecipeToDatabase(this.recipeTitle);
    this.recipeTitle = '';
    this.closeOverlay();
  }

  send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    this.recaptchaV3Service.execute('uploadRecipe')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
      this.btnActive = true;
    });
  }

  uploadRecipe(): void {

    const warningsCount = document.getElementsByClassName('validation-warning').length;
    this.errors = warningsCount;

    if (warningsCount > 0) {
      this.showInvalidFormOverlay = true;
      return;
    }
    this.isHidden = false;
  
  }


  closeOverlay(): void {
    this.isHidden = true;
    this.showInvalidFormOverlay = false;
  }

}
