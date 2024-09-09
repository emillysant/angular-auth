import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('auth/guard');
  const router = inject(Router);

  const localToken = localStorage.getItem('token');
  const decodedToken = jwtDecode(localToken!);
  if (localToken != null) {
    console.log(decodedToken);
    return true;
  } else {
    // localStorage.setItem('token', state.url);
    // router.navigateByUrl('login');

    router.navigate(['/login'], { queryParams: { stateUrl: state.url } });
    return false;
  }
};
