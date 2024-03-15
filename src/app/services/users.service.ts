import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { SingleUser, UserApiResponse } from '../interfaces/users';
import { ROUTE_DATA } from '../config/config';

/**
 * Service for all users-related logic
 */
@Injectable({
  providedIn: 'root'
})
export class UsersService {

	private readonly _apiUrl = ROUTE_DATA.USERS.apiUrl;

  constructor(private _api: ApiService) { }

	getUsers$(): Observable<SingleUser[] | undefined> {
		return this._api.get<UserApiResponse>(this._apiUrl).pipe(
			// the mockup API data needs to be mapped correctly
			map((response) => {
				if(response?.results) {
					return response.results;
				} else {
					return undefined;
				}
			})
		);
	}


}
