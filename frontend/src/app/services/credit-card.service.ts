import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environment';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  baseUrl: string = environment.backendBaseUrl;
  private apiUrl = environment.backendBaseUrl + '/CreditCard';
  constructor(private http: HttpClient, private router: Router) { }
  SaveCreditCardInfo(request: any) {
    return this.http.post<any>(this.apiUrl + '/SaveCreditCardInfo', request);
  }

}
