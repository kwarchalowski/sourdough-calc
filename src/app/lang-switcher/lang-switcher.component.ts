import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent {

  screenWidth = 0;
  hidden = false;

  //TODO: save used language in localStorage and load it on start! 
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 160) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
  
  useLanguage(language: string): void {
    this.translate.use(language);
  }

}
