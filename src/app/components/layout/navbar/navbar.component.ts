import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
		<header class="bg-slate-300 border-b border-slate-400">
			<app-container>
				<div class="flex gap-12 items-center">
					<h1 class="font-bold uppercase">Mockup Data Tables</h1>
					<app-nav-menu></app-nav-menu>
				</div>
			</app-container>
		</header>
  `,
  styles: [
  ]
})
export class NavbarComponent {

}
