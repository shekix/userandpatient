import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ApiService } from './api.service';

export const authorizationGuard: CanActivateFn = (route, state) => {
  
 var service = inject(ApiService);

  return service.access();
};
