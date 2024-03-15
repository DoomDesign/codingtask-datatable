import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-data-table-page',
  template: `
	<app-container>
		<div class="h-full py-4 flex flex-col gap-4">
			<header class="flex justify-between items-baseline gap-8">
				<h2
					*ngIf="!!title"
					class="font-bold text-2xl"
				>{{title}}</h2>
				<span *ngIf="!!gridInfo" class="text-sm">{{gridInfo}}</span>
			</header>
			<app-data-table
			class="block flex-grow"
			[data]="data"
			[columns]="columns"
			(gridInfoChanged)="setGridInfo($event)"
			></app-data-table>
		</div>
	</app-container>
  `,
  styles: [
		`
			:host {
				display: block;
				height: 100%;
			}
		`
  ]
})
export class DataTablePageComponent implements OnInit, OnDestroy {

	@Input({ required: true })
	data !: any[];

	@Input({ required: true })
	columns !: ColDef[];

	public title !: string | undefined;

	public gridInfo !: string | null;

	private _unsubscribe$: Subject<void> = new Subject<void>();

	constructor(private _activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this._activatedRoute.title.pipe(
			takeUntil(this._unsubscribe$)
		).subscribe(
			title => this.title = title
		)
	}

	ngOnDestroy(): void {
			this._unsubscribe$.next();
			this._unsubscribe$.complete();
	}

	public setGridInfo(info: string|null) {
		this.gridInfo = info;
	}
}
