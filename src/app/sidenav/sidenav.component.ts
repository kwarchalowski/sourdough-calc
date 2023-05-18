import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Output() toggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.toggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.toggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  openSidenav(event: Event): void {
    event.stopPropagation();
    this.collapsed = false;
    this.toggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    
  }

}
