import { ColDef } from 'ag-grid-community';
/**
 * Interface for the custom route data
 */
export interface SingleRouteData {
	route: string,
	apiUrl: string,
	pageTitle?: string,
	columns: ColDef[]
}