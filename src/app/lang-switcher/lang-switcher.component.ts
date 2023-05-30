import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UseLocalStorageService } from '../services/use-local-storage.service';

@Component({
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent {

  screenWidth = 0;
  hidden = false;

  constructor(private translate: TranslateService, private localStorage: UseLocalStorageService) {
    translate.setDefaultLang('en');
    // translate.use('en');
    this.loadLanguageFromLS();
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
    localStorage.setItem('language-settings', language);
  }

  loadLanguageFromLS() {
    const storedLanguage = this.localStorage.loadLanguageSettings();
    if(storedLanguage !== null) {
      this.translate.use(storedLanguage);
      return
    }

    this.translate.use('en');
    localStorage.setItem('language-settings', 'en');
  }

}
