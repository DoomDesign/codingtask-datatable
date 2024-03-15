import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, take } from 'rxjs';
import { SingleProduct } from '../interfaces/products';
import { ProductsService } from '../services/products.service';

/**
 * resolves a products array to be used by a component
 */
export const productsDataResolver: ResolveFn<SingleProduct[] | undefined> = (route, state, productsService: ProductsService = inject(ProductsService)): Observable<SingleProduct[] | undefined> => {
  return productsService.getProducts$().pipe(
		take(1)
	);
};
