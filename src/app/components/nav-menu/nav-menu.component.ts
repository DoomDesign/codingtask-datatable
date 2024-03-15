import { Component } from '@angular/core';
import { ROUTE_DATA } from 'src/app/config/config';

@Component({
  selector: 'app-nav-menu',
  template: `
    <nav>
			<ul class="flex">
				<app-nav-menu-item *ngFor="let menuItem of menuItems | keyvalue" [menuItem]="menuItem.value"></app-nav-menu-item>
			</ul>
		</nav>
  `,
  styles: [
  ]
})
export class NavMenuComponent {
	public menuItems = ROUTE_DATA;
}
