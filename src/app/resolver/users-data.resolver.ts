import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Observable, take } from 'rxjs';
import { SingleUser } from '../interfaces/users';

/**
 * resolves a users array to be used by a component
 */
export const usersDataResolver: ResolveFn<SingleUser[] | undefined> = (route, state, usersService: UsersService = inject(UsersService)): Observable<SingleUser[] | undefined> => {
  return usersService.getUsers$().pipe(
		take(1)
	);
};
