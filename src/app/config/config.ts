import { DataTableImageCellRendererComponent } from "../components/data-table-image-cell-renderer/data-table-image-cell-renderer.component";
import { SingleRouteData } from "../interfaces/route-data";

/**
 * Config object containing route data, used throughout the application
 */
export const ROUTE_DATA = {
	USERS: <SingleRouteData>{
		route: 'users',
		pageTitle: 'Users',
		apiUrl: 'https://randomuser.me/api/?results=30',
		columns: [
			{
				field: 'picture.thumbnail',
				headerName: 'Picture',
				resizable: false,
				editable: false,
				sortable: false,
				cellRenderer: DataTableImageCellRendererComponent,
				cellRendererParams: {
					round: true,
				},
				width: 100,
				filter: false
			},
			{
				field: 'name.first'
			},
			{
				field: 'name.last'
			},
			{
				field: 'email'
			},
			{
				field: 'phone'
			},
			{
				field: 'gender'
			},
			{
				field: 'location.postcode',
				cellDataType: 'text'
			},
			{
				field: 'location.city'
			},
			{
				field: 'location.country'
			},

		]
	},
	PRODUCTS: <SingleRouteData>{
		route: 'products',
		pageTitle: 'Products',
		apiUrl: 'https://fakestoreapi.com/products',
		columns: [
			{
				field: 'image',
				resizable: false,
				cellRenderer: DataTableImageCellRendererComponent,
				width: 50,
				editable: false,
				filter: false,
				sortable: false,
			},
			{
				field: 'title'
			},
			{
				field: 'category'
			},
			{
				field: 'price',
				width: 100,
				cellDataType: 'number'
			},
			{
				field: 'description'
			}
		]
	}
}