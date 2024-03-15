import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

/**
 * Custom params interface for the cell renderer class below
 */
export interface DataTableImageCellRendererParams extends ICellRendererParams {
  round?: boolean
}

/**
 * Custom component class to render images inside data tables
 */
@Component({
  selector: 'app-data-table-image-cell-renderer',
  template: `
		<div class="h-full flex items-center">
			<img [src]="params.value" loading="lazy" alt="entry image" class="object-contain h-10 aspect-square" [class.rounded-full]="params.round === true" />
		</div>
  `,
  styles: [
  ]
})
export class DataTableImageCellRendererComponent implements ICellRendererAngularComp {
	params !: DataTableImageCellRendererParams;

	agInit(params: DataTableImageCellRendererParams): void {
			this.params = params;
	}

	refresh(params: DataTableImageCellRendererParams): boolean {
			this.params = params;

			return true;
	}

}
