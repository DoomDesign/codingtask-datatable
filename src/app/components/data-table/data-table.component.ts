import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColDef, GridApi, RowDragMoveEvent, GridReadyEvent, } from 'ag-grid-community';

@Component({
  selector: 'app-data-table',
  template: `
		<ag-grid-angular
			[rowData]="data"
			[columnDefs]="columns"
			[defaultColDef]="defaultColDef"
			[pagination]="true"
			[paginationAutoPageSize]="true"
			[rowHeight]="60"
			[animateRows]="true"
			(sortChanged)="onSortChanged()"
			(filterChanged)="onFilterChanged()"
			(rowDragMove)="onRowDragMove($event)"
			(gridReady)="onGridReady($event)"
			class="ag-theme-quartz h-full"
		>
		</ag-grid-angular>
  `,
  styles: [
	]
})
export class DataTableComponent {

	/**
	 * The data array to display in the table
	 */
	@Input({ required: true })
	data !: any[];

	/**
	 * The columns array to define which columns to display
	 * (also adds predefined columns)
	 */
	@Input({
		required: true,
		transform: (columns: ColDef[]) => [
			{
				headerName: '',
				rowDrag: true,
				width: 50,
				suppressHeaderMenuButton: true,
				suppressMovable: true,
				filter: false,
				pinned: true,
				editable: false,
			},
			{
				field: 'id',
				width: 80,
				editable: false,
				suppressMovable: false,
			},
			...columns
		]
	})
	columns !: ColDef[];

	/**
	 * emits information about the table to parent components
	 */
	@Output()
	gridInfoChanged: EventEmitter<string|null> = new EventEmitter<string|null>();

	// define default settings for all columns
	public defaultColDef: ColDef = {
		width: 170,
		filter: true,
		editable: true
  };

	private _gridApi !: GridApi;
	private _sortActive: boolean = false;
	private _filterActive: boolean = false;

	constructor() {}

	// listen for change on sort changed
  onSortChanged() {
    const colState = this._gridApi.getColumnState() || [];
    this._sortActive = colState.some((c) => c.sort);
    // suppress row drag if either sort or filter is active
    const suppressRowDrag = this._sortActive || this._filterActive;

    this._gridApi.setGridOption('suppressRowDrag', suppressRowDrag);

		this.emitRowDragSuppressedInfo(suppressRowDrag);
  }

  // listen for changes on filter changed
  onFilterChanged() {
    this._filterActive = this._gridApi.isAnyFilterPresent();
    // suppress row drag if either sort or filter is active
    const suppressRowDrag = this._sortActive || this._filterActive;

    this._gridApi.setGridOption('suppressRowDrag', suppressRowDrag);
  }

	// moves rows while dragging them over other rows
  onRowDragMove(event: RowDragMoveEvent) {
    const movingNode = event.node;
    const overNode = event.overNode;
    const rowNeedsToMove = movingNode !== overNode;
    if (rowNeedsToMove) {
      // the list of rows we have is data, not row nodes, so extract the data
      const movingData = movingNode.data;
      const overData = overNode!.data;
      const fromIndex = this.data.indexOf(movingData);
      const toIndex = this.data.indexOf(overData);
      const newStore = this.data.slice();
      this.moveInArray(newStore, fromIndex, toIndex);
      this.data = newStore;
      this._gridApi.setGridOption('rowData', newStore);
      this._gridApi.clearFocusedCell();
    }
  }

	// helper function
	private moveInArray(arr: any[], fromIndex: number, toIndex: number) {
		const element = arr[fromIndex];
		arr.splice(fromIndex, 1);
		arr.splice(toIndex, 0, element);
	}

	// executed when grid component is ready
  onGridReady(params: GridReadyEvent) {
    this._gridApi = params.api;

		// uses the whole width of the table; tries to fit everything into view
		this._gridApi.sizeColumnsToFit();

    // add a 'fake' id to each item, but only if none has a numerical id
		if(this.data.every(data => !!data.id && !isNaN(data.id)) === false) {
			this.data.forEach(function (data, index) {
				data.id = index+1;
			});
			params.api.setGridOption('rowData', this.data);
		}

  }

	// emits info text about the disabled row dragging
	private emitRowDragSuppressedInfo(suppressRowDrag: boolean) {
		const infoText = '⚠ Row dragging is disabled while sorting or filtering is active';

		this.gridInfoChanged.emit(suppressRowDrag ? infoText : null);
	}

}
