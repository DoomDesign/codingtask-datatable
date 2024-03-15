import { Component, Input } from '@angular/core';
import { SingleRouteData } from 'src/app/interfaces/route-data';

@Component({
  selector: 'app-nav-menu-item',
  template: `
    <li class="menuItem">
			<a [routerLink]="menuItem.route" routerLinkActive="active" class="menuItem-link">{{menuItem.pageTitle}}</a>
		</li>
  `,
  styles: [`
		.menuItem {

		}

		.menuItem-link {
			@apply block px-4 py-3 hover:bg-slate-200 focus:bg-slate-200;

			&.active {
				@apply bg-slate-700 text-white;
			}
		}
	`]
})
export class NavMenuItemComponent {

	@Input({ required: true })
	menuItem !: SingleRouteData;

}
