import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  constructor(private titleService: Title, private translate: TranslateService) {
    
    translate.get('errors.404.windowTitle').subscribe(titleMsg => {
      this.titleService.setTitle(titleMsg);
    });
  }

}
