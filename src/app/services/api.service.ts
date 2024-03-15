import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, share, tap } from 'rxjs';

/**
 * Basic API helper service
 * custom wrapper for selected httpClient functions
 * manages loading state handling
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

	// loading state
	private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public isLoading$: Observable<boolean> = this._isLoading$.asObservable().pipe(
		share()
	);

  constructor(private _http: HttpClient) { }

	/**
	 * custom wrapper for httpClient.get()
	 */
	get<T>(url: string, options?: {params: HttpParams}): Observable<T | undefined> {
		this._isLoading$.next(true);

		return this._http.get<T>(url, options).pipe(
			tap(_ => this._isLoading$.next(false)),
			catchError((err) => of(undefined))
		);
	}

	/**
	 * custom wrapper for httpClient.post()
	 * ! is not used in this application
	 */
	post<T>(url: string, body: any, options?: {params: HttpParams}): Observable<T | undefined> {
		this._isLoading$.next(true);

		return this._http.post<T>(url, body, options).pipe(
			tap(_ => this._isLoading$.next(false)),
			catchError((err) => of(undefined))
		);
	}
}
