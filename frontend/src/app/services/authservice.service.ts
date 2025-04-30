import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  IsApiRefershingToken: boolean = false

  // baseUrl: string = environment.backendBaseUrl;
baseUrl:any;
  private httpOptionsForText = {
    headers: new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    responseType: 'text'
  };
  constructor(private httpClient: HttpClient, private router: Router) {

  }

 

  refreshauthentication() {
    let token: any = localStorage.getItem("token")
    let refreshToken: any = localStorage.getItem("refreshToken")
    let url = `${this.baseUrl}/token/refresh`
    return this.httpClient.post(url, { token: token, refreshToken: refreshToken }).pipe(tap((resp: any) => {
      localStorage.setItem("token", resp.token);
      localStorage.setItem("refreshToken", resp.refreshToken);
    }));
  }

  logout() {
    debugger;
    localStorage.removeItem('token');

    localStorage.removeItem('userId');

    document.cookie = 'Permissions=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    this.router.navigate(['/auth/login']);
  }

  // getuserpermissions() {debugger
  //   this.httpClient.get(this.baseUrl + "/users/permissions").pipe(
  //     map((response: any) => {
  //       var permissions = response;
  //       const date = new Date();
  //       date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
  //       const expires = `expires=${date.toUTCString()}`;
  //       document.cookie = `${'Permissions'}=${permissions}; ${expires}; path=/`;
  //       this.permissionService.UserPermissions = permissions;
  //     }),
  //     catchError((error) => {
  //       this.router.navigate(['/auth/error']);
  //       console.log(error)
  //       return of(false);
  //     })
  //   ).subscribe();
  // }

  // getuserpermissions() {
  // return  this.httpClient.get(this.baseUrl + "/users/permissions").pipe(
  //     map((response: any) => {
  //       this.permissionService.UserPermissions = response;
  //       console.log(response);
  //     }),
  //     catchError((error) => {
  //       this.router.navigate(['/auth/login']);
  //       console.log(error);
  //       return of(false);
  //     })
  //   )
  // }



  // Logged In User
  // loogedInUserClaims() {
  //   let url = `${this.baseUrl}/Authenticate/loogedInUserClaims`
  //   return this.httpClient.get(url).pipe(tap((resp: any) => {
  //     console.log(resp)
  //   }));
  // }

  // getAuthUserInfo() {
  //   let url = `${this.baseUrl}/Authenticate/getAuthUserInfo`
  //   return this.httpClient.get(url).pipe(tap((resp: any) => {
  //     console.log(resp)
  //   }));
  // }

  // getAuthUserPermissions() {
  //   let url = `${this.baseUrl}/Authenticate/getAuthUserPermissions`
  //   return this.httpClient.get(url).pipe(tap((resp: any) => {
  //     console.log(resp)
  //   }));
  // }
  // getUserInfo() {
  //   let url = `${this.baseUrl}/users/profile`
  //   return this.httpClient.get(url).pipe(tap((resp: any) => {
  //     console.log(resp)
  //   }));
  // }

}
