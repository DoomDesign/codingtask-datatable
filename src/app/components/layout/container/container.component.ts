import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <div class="container max-w-none h-full">
			<ng-content></ng-content>
		</div>
  `,
  styles: [
  ]
})
export class ContainerComponent {

}
