import { Component, ElementRef, HostListener } from '@angular/core';
import { FrdService } from '../frd.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '../loader.service';

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
  titlePlaceholder = '';
  recipeTitle = '';
  token: string | undefined;
  canShowError = false;


  constructor(private frdService: FrdService, private elementRef: ElementRef, private recaptchaV3Service: ReCaptchaV3Service, private translate: TranslateService, private loader: LoaderService) {
    this.token = undefined;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 500) {
      this.closeOverlay();
    }
  }

  addRecipeToDb() {
    if (this.recipeTitle === '' || this.recipeTitle === '\'form.upload.titlePlaceholderLabel\' | translate') {
      this.translate.get('form.upload.defaultTitle').subscribe(res => this.recipeTitle = res);
    }

    this.loader.setLoading(true);
    this.frdService.addRecipeToDatabase(this.recipeTitle);
    this.closeOverlay();
  }

  send(form: NgForm): void {
    this.loader.setLoading(true);
    this.btnActive = false;

    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
        this.loader.setLoading(false);

      }
      return;
    }

    this.recaptchaV3Service.execute('uploadRecipe')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
      this.canShowError = false;
      this.token = token;
      this.loader.setLoading(false);
      this.btnActive = true;
      
      if(token === undefined) this.canShowError = true; 
      return;

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


  //* close with 'esc'
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.key === "Escape") this.closeOverlay();
  }

}
