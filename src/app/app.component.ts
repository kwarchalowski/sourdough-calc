import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  title = 'sourdough-calc';

  isSideNavCollapsed = false;
  screenWidth = 0;

  toggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}
}
