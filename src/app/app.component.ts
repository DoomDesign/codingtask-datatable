import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
		<app-navbar></app-navbar>
		<main class="flex-grow relative bg-white">
			<div class="h-full" [class.opacity-30]="(apiIsLoading$ | async) === true">
				<router-outlet></router-outlet>
			</div>
			<app-loading-indicator class="w-32 h-32 absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" *ngIf="(apiIsLoading$ | async) === true"></app-loading-indicator>
		</main>
		<app-footer></app-footer>
  `,
  styles: [`
		:host {
			@apply h-dvh flex flex-col;
		}
	`]
})
export class AppComponent {

	public apiIsLoading$ !: Observable<boolean>;

	constructor(private _apiService: ApiService) {
		this.apiIsLoading$ = this._apiService.isLoading$;
	}
}
