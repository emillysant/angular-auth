import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { catchError, map, Observable } from 'rxjs';

export const roleGuard: CanActivateFn = (route, state) => {
  console.log('role/guard');
  const localToken = localStorage.getItem('token');
  const decodedToken = jwtDecode(localToken!);
  console.log(localToken, decodedToken);
  const router = inject(Router);
  const authService = inject(AuthService);

  if (!localToken) {
    router.navigate(['/login']);
    return new Observable<boolean>((observer) => observer.next(false));
  }

  return authService.getUserRole(localToken).pipe(
    map((role) => {
      const expectedRoles = route.data['roles'] as Array<string>;
      if (expectedRoles.includes(role)) {
        return true;
      } else {
        router.navigate(['']);
        return false;
      }
    }),
    catchError((error) => {
      console.error('Erro ao verificar o role do usuário', error);
      router.navigate(['/login']);
      return new Observable<boolean>((observer) => observer.next(false));
    })
  );
};
