import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { catchError, map, of } from "rxjs";
import { AuthService } from "./services/authservice.service";

export const authGuard: CanActivateFn = (route, state) => {
  const http = inject(HttpClient);
  const router = inject(Router);
  // const auth = inject(PermissionService);
  const requiredPermission = route.data?.['permission'];
  // var condition = auth.checkViewPermission(state.url);
  // if (condition == false) {
  //   router.navigate(['auth/access'])
  //   return false;
  // }
  return true;
};