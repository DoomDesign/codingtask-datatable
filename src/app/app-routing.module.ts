import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTablePageComponent } from './components/pages/data-table-page/data-table-page.component';
import { productsDataResolver } from './resolver/products-data.resolver';
import { usersDataResolver } from './resolver/users-data.resolver';
import { ROUTE_DATA } from './config/config';

/**
 * Routes and their data table columns configuration
 * For columns configuration, see https://www.ag-grid.com/javascript-data-grid/column-definitions/
 */
const routes: Routes = [
	{
		path: ROUTE_DATA.PRODUCTS.route,
		component: DataTablePageComponent,
		title: ROUTE_DATA.PRODUCTS.pageTitle,
		resolve: {data: productsDataResolver},
		data: {
			columns: ROUTE_DATA.PRODUCTS.columns
		}
	},
	{
		path: ROUTE_DATA.USERS.route,
		component: DataTablePageComponent,
		title: ROUTE_DATA.USERS.pageTitle,
		resolve: {data: usersDataResolver},
		data: {
			columns: ROUTE_DATA.USERS.columns
		}
	},
	{
		path: '**',
		redirectTo: ROUTE_DATA.PRODUCTS.route // on any other (or no) route, redirect to /products
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
		bindToComponentInputs: true // will apply resolve.data and data.columns to the corresponding inputs of the route component
	})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
