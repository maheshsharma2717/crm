import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environment';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl: string = environment.backendBaseUrl;
  private apiUrl = environment.backendBaseUrl + '/Customer';
  constructor(private http: HttpClient, private router: Router) { }
getAllCustomer() {
  return this.http.get<any>(this.apiUrl + "/all");
}
getAllCustomerById(id: any) {
  return this.http.get<any>(`${this.apiUrl}/${id}`);
}
 addCustomer(request: any) {
  return this.http.post<any>(this.apiUrl + '/AddCustomer', request);
}
 updateCustomer(request: any) {
  return this.http.post<any>(this.apiUrl + '/UpdateCustomer', request);
}
 DeleteCustomer(request: any) {
  return this.http.post<any>(this.apiUrl + '/DeleteCustomer', request);
}
}
