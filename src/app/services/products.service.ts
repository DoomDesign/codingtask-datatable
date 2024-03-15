import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsApiResponse, SingleProduct } from '../interfaces/products';
import { ApiService } from './api.service';
import { ROUTE_DATA } from '../config/config';

/**
 * Service for all products-related logic
 */
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _apiUrl = ROUTE_DATA.PRODUCTS.apiUrl;

  constructor(private _api: ApiService) { }

	getProducts$(): Observable<SingleProduct[] | undefined> {
		// can be used without mapping, since the mockup API returns just an array
		return this._api.get<ProductsApiResponse>(this._apiUrl)
	}
}
